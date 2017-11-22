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
                rm: true,
                default: '',
                isDefault: true
            },
            placeholder: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            prepend: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            append: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            type: {
                type: 'selection',
                value: 'text',
                items: ['text', 'textarea'],
                key: '类型',
                default: 'text',
                isDefault: true
            },
            resize: {
                type: 'selection',
                value: 'none',
                items: ['none', 'both', 'horizontal', 'vertical'],
                default: 'none',
                isDefault: true
            },
            readonly: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            autofocus: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            icon: {
                type: 'selection',
                value: '',
                items: ['', 'edit'],
                default: '',
                isDefault: true
            },
            disabled: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            size: {
                type: 'selection',
                value: 'medium',
                items: ['medium', 'small', 'mini'],
                default: 'medium',
                isDefault: true
            },
            name: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            autosize: {
                type: 'boolean',
                value: false
            },
            rows: {
                type: 'number',
                value: '',
                default: '',
                isDefault: true
            },
            maxlength: {
                type: 'number',
                value: '',
                default: '',
                isDefault: true
            },
            minlength: {
                type: 'number',
                value: '',
                default: '',
                isDefault: true
            },
            max: {
                type: 'number',
                value: '',
                default: '',
                isDefault: true
            },
            min: {
                type: 'number',
                value: '',
                default: '',
                isDefault: true
            },
            step: {
                type: 'number',
                value: '',
                default: '',
                isDefault: true
            },
            validateEvent: {
                type: 'boolean',
                value: true,
                default: true,
                isDefault: true
            },
            'prefix-icon': {
                type: 'selection',
                value: '',
                items: elementUIICon,
                default: '',
                isDefault: true
            },
            'suffix-icon': {
                type: 'selection',
                value: '',
                items: elementUIICon,
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
    let formItemAttr = getStringTypeAttr({label: attributes.label, prop: attributes.prop}, info.id, true)

    let template = `<el-form-item 
                        ${formItemAttr}>
                        <el-input 
                            ${stringAttr}>
                            <template slot='prepend' v-if="${info.id}.prepend">{{${info.id}.prepend}}</template>
                            <template slot='append' v-if="${info.id}.append">{{${info.id}.append}}</template>
                        </el-input>
                    </el-form-item>`
    //删除自定义非ui属性

    return { template, attributes, slots }
}
export default handle
