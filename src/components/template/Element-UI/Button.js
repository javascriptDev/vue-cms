import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            type: {
                type: 'selection',
                value: 'default',
                items: ['default', 'primary', 'success', 'warning', 'failed']
            },
            size: {
                type: 'selection',
                value: '',
                items: ['', 'medium', 'small', 'mini']
            },
            icon: {
                type: 'selection',
                value: '',
                items: elementUIICon
            },
            nativeType: {
                type: 'selection',
                value: '',
                items: ['button', 'submit', 'reset']
            },
            loading: {
                type: 'boolean',
                value: false
            },
            disabled: {
                type: 'boolean',
                value: false
            },
            plain: {
                type: 'boolean',
                value: false,
                key: '朴素按钮'
            },
            autofocus: {
                type: 'boolean',
                value: false
            },
            text: {
                type: 'text',
                value: '按钮'
            },
            'v-on:click': {
                type: 'text',
                value: 'click'
            },
            'click': {
                type: 'function',
                value: 'alert(3)'
            },
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
