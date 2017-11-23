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
                key: '表单 label',
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
            type: {
                type: 'selection',
                value:  '',
                items: ['', 'year', 'month', 'date', 'week', 'datetime', 'datetimerange', 'daterange'],
                default: '',
                isDefault: true
            },
            placeholder: {
                type: 'text',
                value: '选择日期',
                default: '',
                isDefault: false
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
            clearable: {
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
                type: 'text',
                value: 'yyyy-MM-dd',
                default: '',
                isDefault: true
            },
            'v-on:change': {
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
    let formItemAttr = getStringTypeAttr({label: attributes.formLabel, prop: attributes.prop}, info.id)

    let template = `<el-form-item 
                        ${formItemAttr}>
                        <el-date-picker 
                            ${stringAttr}>
                        </el-date-picker>
                    </el-form-item>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
