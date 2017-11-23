import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            'v-model': {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            label: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true,
                rm: true
            },
            prop: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true,
                rm: true
            },
            disabled: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            'active-icon-class': {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            'active-text': {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            'inactive-text': {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            name: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            }
        },
        slots = {
            default: []
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id, true)
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
