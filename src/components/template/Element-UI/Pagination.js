import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'
var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            'v-on:size-change': {
            	type: 'function',
            	value: '',
            	default: '',
            	isDefault: true,
            	key: '事件: 页码变化'
            },
            'v-on:current-change': {
            	type: 'function',
            	value: '',
            	default: '',
            	isDefault: true,
            	key: '事件: 换页'
            },
            small: {
            	type: 'boolean',
            	value:  false,
            	default:  false,
            	isDefault: true
            },
            ref: {
            	type: 'text',
            	value: '',
            	default: '',
            	isDefault: true
            },
            total: {
            	type: 'number',
            	value: '',
            	default: '',
            	isDefault: true,
            	bind: true
            },
            'page-size': {
            	type: 'number',
            	value: '10',
            	default: '10',
            	isDefault: true,
            	bind: true
            },
            'current-page': {
            	type: 'number',
            	value: '',
            	default: '',
            	isDefault: true,
            	bind: true
            },
            layout: {
            	type: 'text',
            	value: 'total, sizes, prev, pager, next, jumper',
            	default: 'total, sizes, prev, pager, next, jumper',
            	isDefault: false
            },
            'page-sizes': {
            	type: 'object',
            	value: JSON.stringify([10, 20, 30, 40, 50, 100]),
            	default: JSON.stringify([10, 20, 30, 40, 50, 100]),
            	isDefault: false,
            	bind: true
            },
            'prev-text': {
            	type: 'text',
            	value: '',
            	default: '',
            	isDefault: true
            },
            'next-text': {
            	type: 'text',
            	value: '',
            	default: '',
            	isDefault: true
            }
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id)

    let template = `<el-pagination
				      	${stringAttr}>
				    </el-pagination>`
    //删除自定义非ui属性

    return { template, attributes, slots }
}
export default handle
