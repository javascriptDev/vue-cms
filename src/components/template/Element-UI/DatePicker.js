import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            'v-model': {
                type: 'text',
                value: ''
            },
            formLabel: {
                type: 'text',
                value: '日期'
            },
            prop: {
                type: 'text',
                value: ''
            },
            type: {
                type: 'selection',
                value:  '',
                items: ['', 'year', 'month', 'date', 'week', 'datetime', 'datetimerange', 'daterange']
            },
            placeholder: {
                type: 'text',
                value: '选择日期'
            },
            readonly: {
                type: 'boolean',
                value:  false
            },
            disabled: {
                type: 'boolean',
                value:  false
            },
            clearable: {
                type: 'boolean',
                value:  false
            },
            'range-separator': {
                type: 'text',
                value: '',
                key: '范围分隔符'
            },
            format: {
                type: 'text',
                value: 'yyyy-MM-dd'
            },
            'on-change': {
                type: 'text',
                value: 'change'
            },
            change: {
                type: 'function',
                value: `alert(3)`
            }

        },
        slots = {
            default: []
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id)

    let template = `<el-form-item 
                        label="${attributes.formLabel.value}"
                        prop="${attributes.prop.value}"
                        >
                        <el-date-picker 
                            ${stringAttr}>
                        </el-date-picker>
                    </el-form-item>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
