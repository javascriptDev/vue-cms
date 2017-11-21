import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            label: {
                type: 'text',
                value: ''
            },
            prop: {
                type: 'text',
                value: ''
            },
            disabled: {
                type: 'boolean',
                value: false
            },
            'active-icon-class': {
                type: 'text',
                value: ''
            },
            'active-text': {
                type: 'text',
                value: ''
            },
            'inactive-text': {
                type: 'text',
                value: ''
            },
            name: {
                type: 'text',
                value: ''
            },
            'v-model': {
                type: 'text',
                value: info.id + '.value'
            },
            value: {
                type: 'boolean',
                value: false
            }
        },
        slots = {
            default: []
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id)
    let formItemAttr = getStringTypeAttr({label: attributes.label, prop: attributes.prop}, info.id)

    let template = `<el-form-item 
                        ${formItemAttr}>
                        <el-switch 
                            ${stringAttr}>
                        </el-switch>
                    </el-form-item>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
