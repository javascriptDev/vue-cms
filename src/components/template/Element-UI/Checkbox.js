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
                bind: true
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
            'true-label': {
                type: 'text',
                value: '是',
                default: '是',
                isDefault: true
            },
            'false-label': {
                type: 'text',
                value: '否',
                default: '否',
                isDefault: true
            },
            size: {
                type: 'selection',
                value:  'medium',
                items: ['medium', 'small', 'mini'],
                default: 'medium',
                isDefault: true
            },
            disabled: {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            border: {
                type: 'boolean',
                value:  false,
                default: false,
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
    let stringAttr = getStringTypeAttr(attributes, info.id)
    let formItemAttr = getStringTypeAttr({label: attributes.formLabel, prop: attributes.prop}, info.id, true)

    let template = `<el-form-item 
                        ${formItemAttr}
                        >
                        <el-checkbox 
                            ${stringAttr}>
                        </el-checkbox>
                    </el-form-item>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
