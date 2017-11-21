import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'
var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
			'v-model': {
	      		type: 'text',
	      		value: ''
	      	},
            placeholder: {
	      		type: 'text',
	      		value: ''
	      	},
	      	type: {
	      		type: 'selection',
	      		value: '',
	      		items: ['text', 'textarea'],
	      		key: '类型'
	      	},
	      	resize: {
	      		type: 'selection',
	      		value: '',
	      		items: ['none', 'both', 'horizontal', 'vertical']
	      	},
	      	readonly: {
	      		type: 'boolean',
	      		value: false
	      	},
	     	autofocus: {
	     		type: 'boolean',
	     		value: false
	     	},
	      	icon: {
	      		type: 'selection',
	      		value: '',
	      		items: ['', 'edit']
	      	},
	      	disabled: {
	      		type: 'boolean',
	      		value: false
	      	},
	      	size: {
	        	type: 'selection',
	        	value: '',
	        	items: ['', 'medium', 'small', 'mini']
	      	},
	      	name: {
	      		type: 'text',
	      		value: ''
	      	},
	      	autosize: {
	      		type: 'boolean',
	      		value: false
	      	},
	      	rows: {
	      		type: 'number',
	      		value: ''
	      	},
	      	form: {
	      		type: 'text',
	      		value: ''
	      	},
	      	maxlength: {
	      		type: 'number',
	      		value: ''
	      	},
	      	minlength: {
	      		type: 'number',
	      		value: ''
	      	},
	      	max: {
	      		type: 'number',
	      		value: ''
	      	},
	      	min: {
	      		type: 'number',
	      		value: ''
	      	},
	      	step: {
	      		type: 'number',
	      		value: ''
	      	},
	      	validateEvent: {
	      		type: 'boolean',
	      		value: true
	      	},
	      	'prefix-icon': {
	      		type: 'selection',
	      		value: '',
	      		items: elementUIICon
	      	},
	      	'suffix-icon': {
	      		type: 'selection',
	      		value: '',
	      		items: elementUIICon
	      	},
	      	prepend: {
	      		type: 'text',
	      		value: ''
	      	},
	      	append: {
	      		type: 'text',
	      		value: ''
	      	},
	      	label: {
	      		type: 'text',
	      		value: ''
	      	},
	      	prop: {
	      		type: 'text',
	      		value: ''
	      	}
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id)
    let formItemAttr = getStringTypeAttr({label: attributes.label, prop: attributes.prop}, info.id)

    let template = `<el-form-item 
    					${formItemAttr}>
    					<el-input 
  	                        ${stringAttr}>
	                        <template slot='prepend' v-if="${info.id}.prepend">{{${info.id}.prepend}}</template>
	                        <template slot='append' v-if="${info.id}.append">{{${info.id}.append}}</template>
	                	</el-input>
                	</el-form-item>`
    //删除自定义非ui属性

    return { template, attributes, slots }
}
export default handle
