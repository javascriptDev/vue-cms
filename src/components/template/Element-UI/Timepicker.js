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
            formLabel: {
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
            placeholder: {
                type: 'text',
                value: '选择时间',
                default: '选择时间',
                isDefault: true
            },
            readonly: {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            disabled: {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            'is-range': {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            'range-separator': {
                type: 'text',
                value: '',
                key: '范围分隔符',
                default: '',
                isDefault: true
            },
            format: {
                type: 'selection',
                value: '',
                items: ['', 'HH:mm:ss', 'HH-mm-ss'],
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
    let stringAttr = getStringTypeAttr(attributes, info.id)
    let formItemAttr = getStringTypeAttr({label: attributes.formLabel, prop: attributes.prop}, info.id, true)

    let template = `<el-form-item 
                        ${formItemAttr}>
                        <el-time-picker 
                            ${stringAttr}>
                        </el-time-picker>
                    </el-form-item>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
