<style>
    .editor {
    	min-height: 300px;
    	border: 1px solid red;
    }
</style>
<template>
	<div>
		<mu-appbar title="Element-UI 表单验证生成器"></mu-appbar>
		<el-row>
		  	<el-col :span="14">
				<mu-appbar title="设计器">	</mu-appbar>
				<div>
					<el-button type="success" icon='el-icon-plus' @click='addField'>添加字段</el-button>
					<el-button type="info" icon='el-icon-plus' @click='test'>测试</el-button>
					<el-button type="info" icon='el-icon-plus' @click='test(1)'>same测试</el-button>
					<el-button type="info" icon='el-icon-plus' @click='test(2)'>长度测试</el-button>

					<p></p>
					<Rule :rule="rule" :id="rule.id" @rmItem="rm" v-for="rule in rules" @></Rule>
				</div>
		  	</el-col>
		  	<el-col :span="10">
		  		<mu-appbar title="代码生成区">
					<el-button type="success" @click='copy'>复制到剪贴板</el-button>
		  		</mu-appbar>
				<mu-content-block :class="{'content':true,'active': true}">
		           <pre v-highlightjs="getSource()"><code class="html"></code></pre>
		        </mu-content-block>
		  	</el-col>
		</el-row>
	</div>
</template>
<script>
	import Rule from '../components/rule.vue'
	import { getTpl, DataTypeEnum } from '../utils/rule'
	/**
	 * 获取规则模板
	 * @return {[type]} [description]
	 */
	function getRuleTpl() {
		return JSON.parse(JSON.stringify(getTpl()))
	}
	export default {
		components: {
			Rule
		},
		data () {
			return {
				rules: [getRuleTpl()]
			}
		},
		methods: {
			copy () {
				var textField = document.createElement('textarea');
			    textField.innerText = document.querySelector('.html').innerText;
			    document.body.appendChild(textField);
			    textField.select();
			    document.execCommand('copy');
			    textField.remove();
			},
			addField () {
				this.rules.push(getRuleTpl())
			},
			getSource () {
				let me = this
				// 如果是自定义函数或者same as 需要在data return 之前添加一个自定义函数,
				let preFunc = []
				// 如果是数据类型是 same as, 还需要在same to 字段验证规则中添加一个 validator 验证规则。
				let addition = []
				let rules = this.rules.map(item => {
					return me.generateRule(item, preFunc, addition)
				})
				// 添加附加函数
				if (addition.length > 0) {
					addition.forEach(item => {
						let sameToField = item.field
						// 验证字段中是否包含 same To 的字段
						let hasRule = false
						rules.forEach(r => {
							let field = Object.keys(r)[0]
							if (field == sameToField) {
								hasRule = true
								r[field].push(item.rule)
							}
						})
						if (!hasRule) {
							let obj = {}
							obj[sameToField] = [{ validator: `V${sameToField}` }]
							rules.push(obj)
						}
					})
				}
				// 转换格式。
				let result = this.convert(rules).join('\n')
				let str = `
					<script>
						export default {
							data () {
								${preFunc.join('')}
								return {
									rules: {
										${result}
									}
								}
							}
						}
					<\/script>`
				// 去掉validator vlaue的引号
				str = str.replace(/{"validator":(.*?)}/g, function(a, $1){return a.replace($1, $1.replace(/"/g, ''))})
				return this.$prettyDom(str).replace(/\n\n/g, '\n').replace(/  /g, '    ')
			},
			/**
			 * 生成单个规则
			 */
			generateRule (ruleData, preFunc, additionArr) {
				let rules = []
				// 需要检查的属性
				let checkKey = ['type', 'len', 'same', 'pattern']
				let defaultOptions = ruleData.options
				// 新属性
				let extend = {}
				// 默认属性
				let rule = {
					required: true,
					type: ruleData.type,
					message: defaultOptions.requiredErrorTxt,
				}
				// 解决不同的数据类型
				switch(ruleData.type) {
					// 正则
					case 'pattern':
						extend = {
							pattern: defaultOptions.pattern,
							message: defaultOptions.patternErrorTxt
						}
						break
					// 值相同
					case 'same':
						let sameTo = this.rules.find(item => item.field == defaultOptions.same) || {field: '', options: {requiredErrorTxt: ''}}
						rules.push({
							validator: `V${ruleData.field}`,
						})
						let sameToField = defaultOptions.same
						extend.type = sameTo.type || 'string'
						if (sameTo.type === 'pattern') {
							// 如果same to字段是正则，则把规则复制到当前字段。
							extend = {
								pattern: sameTo.options.pattern,
								message: sameTo.options.patternErrorTxt
							}
						}
						let pre = `
						/*
						 * 变量替换释义 : <el-form model={ruleForm} rules={rules} ref="form"></el-form>
						 * 自动生成的代码需要替换如下字段
						 *
						 * YOUR_FORM_REFERENCE   -> form
						 * YOUR_FORM_KEY_IN_DATA   -> ruleForm
						 */
						const V${ruleData.field} = (rule, value, callback) => {
							if (value === '') {
								callback(new Error('${defaultOptions.requiredErrorTxt}'))
							} else {
                        		this.$refs.YOUR_FORM_REFERENCE.validateField('${defaultOptions.same}')
							}
							callback()
						}
						const V${sameToField} = (rule, value, callback) => {
			                if (value === '') {
			                    callback(new Error('${sameTo.options.requiredErrorTxt}'))
			                } else if (value !== this.YOUR_FORM_KEY_IN_DATA.${ruleData.field}) {
			                    callback(new Error('${defaultOptions.sameErrorTxt}'))
			                } else {
			                    callback()
			                }
			            }`

						preFunc.push(pre)
						additionArr.push({
							field: sameToField,
							rule: {validator: `V${sameToField}`}
						})
						break
				}
				rules.push(Object.assign(rule, extend))

				// 长度处理
				if (ruleData.len == 'len') {
					rules.push({
						type: ruleData.type,
						len: defaultOptions.len,
						message: defaultOptions.lenErrorTxt
					})
				} else if(ruleData.len === 'min,max') {
					rules.push({
						type: ruleData.type,
						min: defaultOptions.min,
						max: defaultOptions.max,
						message: defaultOptions.lenErrorTxt
					})
				}

				let result = {}
				result[ruleData.field] = rules
				return result
			},
			convert (object, layer = 5) {
				let space = '    '
				let result = []
				let me = this
				return object.map(rule => {
					// 去掉前后花括号.
					return JSON.stringify(rule).replace(/^{(.*?)}$/, function(match, $1){
						return $1 + ','
					})
				})
			},
			test (type) {
				if (type == 1) {
					this.rules = [Object.assign(getTpl(), {
						type: 'string',
						field: 'pwd',
						required: true,
						options: {
							requiredErrorTxt: '密码不能为空'
						}
					}), Object.assign(getTpl(), {
						type: 'same',
						field: 'repwd',
						required: true,
						options: {
							requiredErrorTxt: '再次密码不能为空',
							same: 'pwd',
							sameErrorTxt: '两次密码不一样。'
						}
					})]
					return
				} else if (type === 2) {
					this.rules = [Object.assign(getTpl(), {
						type: 'string',
						field: 'name',
						required: true,
						len: 'len',
						options: {
							len: 3,
							requiredErrorTxt: '密码不能为空',
							lenErrorTxt: '长度错误'
						}
					}), Object.assign(getTpl(), {
						type: 'string',
						field: 'mail',
						required: true,
						len: 'min,max',
						options: {
							min: 1,
							max: 4,
							requiredErrorTxt: '再次密码不能为空',
							lenErrorTxt: '长度错误'
						}
					})]
					return
				}

				this.rules = setTestData()
			},
			rm (id) {
				this.rules.splice(this.rules.findIndex(item => item.id === id), 1)
			}
		}
	}

	// 生成测试数据
	function setTestData() {
		let data = DataTypeEnum.map(item => {
			let dataType = item.value
			let tpl = {
				type: dataType,
				field: dataType,
				required: true
			}
			let extend = {
				options: {
					requiredErrorTxt: `${dataType} 不能为空`
				}
			}
			/**
			 * 长度测试
			 * 测试规则:
			 * 1. 字符串 采用 区间测试
			 * 2. number 采用定长
			 */
			if (dataType === 'string') {
				tpl.len = 'min,max'
				extend.options.min = 1
				extend.options.max = 3
				extend.options.lenErrorTxt = '长度必须1到3'
			} else if (dataType === 'number') {
				tpl.len = 'len'
				extend.options.len = 2
				extend.options.lenErrorTxt = '长度必须是2'
			}

			switch(dataType) {
				// 正则
				case 'pattern':
					extend.options = Object.assign(extend.options, {
						pattern: '/\d/g',
						patternErrorTxt: '必须是数字'
					})
					break
				// 值相同
				case 'same':
					extend.options = Object.assign(extend.options, {
						same: 'aaa',
						sameErrorTxt: '必须相同'
					})
					break
			}
			return Object.assign(getTpl(), Object.assign(tpl, extend))
		})
		return data
	}
</script>
