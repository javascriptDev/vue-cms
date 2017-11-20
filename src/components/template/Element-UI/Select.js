import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
  //定义默认属性
  let attributes = {
      name: {
      	type: 'text',
      	value: ''
      },
      id: {
      	type: 'text',
      	value: ''
      },
      value: {
      	type: 'text',
      	value: 'demo'
      },
      size: {
      	type: 'selection',
      	value: '',
      	items: ['', 'large', 'mini', 'small']
      },
      disabled: {
      	type: 'boolean',
      	value: false
      },
      clearable: {
      	type: 'boolean',
      	value: false
      },
      filterable: {
      	type: 'boolean',
      	value: false
      },
      loading: {
      	type: 'boolean',
      	value: false
      },
      popperClass: {
      	type: 'text',
      	value: '',
      	key: '下拉框的类名'
      },
      noMatchText: {
      	type: 'text',
      	value: '无匹配',
      	key: '搜索条件无匹配时显示的文字'
      },
      noDataText: {
      	type: 'text',
      	value: '无数据'
      },
      multiple: {
      	type: 'boolean',
      	value: false
      },
      multipleLimit: {
      	type: 'number',
      	value: 0,
      	key: '多选时用户最多可以选择的项目数'
      },
      placeholder: {
      	type: 'text',
      	value: '请选择'
      },
      reserveKeyword: {
      	type: 'boolean',
      	value: false,
      	key: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词'
      },
      'v-model': {
      	type: 'text',
      	value: 'value'
      },
      list: {
      	type: 'object',
      	value: '[{value: "demo", label: "例子"}, {value: "demo1", label: "例子2"}]'
      }
    },
    slots = {
      default: []
    }

  //覆盖默认属性
  Object.assign(attributes, _attr)

  //字符串模板操作
  let stringAttr = getStringTypeAttr(attributes, info.id)
  let template = `<el-select 
                        ${stringAttr}>
						<el-option
						      v-for="item in ${info.id}.list"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						      <span style="float: left">{{ item.label }}</span>
						      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
						</el-option>
                    </el-select>`
  //删除自定义非ui属性
  return { template, attributes, slots }
}
export default handle
