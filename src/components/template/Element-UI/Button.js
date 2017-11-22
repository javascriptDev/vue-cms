import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            type: {
                type: 'selection',
                value: 'default',
                items: ['default', 'primary', 'success', 'warning', 'failed'],
                default: 'default',
                isDefault: true
            },
            size: {
                type: 'selection',
                value: 'medium',
                items: ['medium', 'small', 'mini'],
                default: 'medium',
                isDefault: true
            },
            icon: {
                type: 'selection',
                value: '',
                items: elementUIICon,
                default: '',
                isDefault: true
            },
            nativeType: {
                type: 'selection',
                value: 'button',
                items: ['button', 'submit', 'reset'],
                default: 'button',
                isDefault: true
            },
            loading: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            disabled: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            plain: {
                type: 'boolean',
                value: false,
                key: '朴素按钮',
                default: false,
                isDefault: true
            },
            autofocus: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            text: {
                type: 'text',
                value: '按钮',
                default: '按钮',
                isDefault: true
            },
            'v-on:click': {
                type: 'function',
                value: ''
            }
        },
        slots = {
            default: []
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id)
    let template = `<el-button 
                        ${stringAttr}>
                        {{${info.id}.text}}
                    </el-button>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
