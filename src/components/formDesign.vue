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

					<p></p>
					<Rule :rule="rule" :id="rule.id" @rmItem="rm" v-for="rule in rules" @></Rule>
				</div>
		  	</el-col>
		  	<el-col :span="10">
		  		<mu-appbar title="代码生成区">	</mu-appbar>
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
			addField () {
				this.rules.push(getRuleTpl())
			},
			getSource () {
				let me = this
				let preFunc = []
				let rules = this.rules.map(item => {
					return me.generateRule(item, preFunc)
				})
				let result = this.convert(rules).join('\n')
				let str = `
					<script>
						export default {
							data () {
								${preFunc.join('')}
								return {
									rules: ${result}
									}
								}
							}
						}
					<\/script>`
				return this.$prettyDom(str).replace(/\n\n/g, '\n').replace(/  /g, '    ')
			},
			/**
			 * 生成单个规则
			 */
			generateRule (ruleData, preFunc) {
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
						extend = {
							validator: ''
						}
						break
				}
				rules.push(Object.assign(rule, extend))

				// 长度处理
				if (ruleData.len == 'len') {
					rules.push({
						len: defaultOptions.len,
						message: defaultOptions.lenErrorTxt
					})
				} else if(ruleData.len === 'min,max') {
					rules.push({
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
					return JSON.stringify(rule)
				})
			},
			test () {
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
