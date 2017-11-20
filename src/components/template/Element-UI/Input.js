import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'
var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            value: {
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
	        	value: 'medium',
	        	items: ['medium', 'small', 'mini']
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
	      		value: 2
	      	},
	      	autoComplete: {
	      		type: 'selection',
	      		value: 'off',
	      		items: ['off', 'on']
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
	      	}
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id)
    let template = `<el-input 
                        ${stringAttr}>
                        <template slot='prepend' v-if="${info.id}.prepend">{{${info.id}.prepend}}</template>
                        <template slot='append' v-if="${info.id}.append">{{${info.id}.append}}</template>
                </el-input>`
    //删除自定义非ui属性

    return { template, attributes, slots }
}
export default handle
