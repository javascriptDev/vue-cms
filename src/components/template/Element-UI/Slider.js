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
            min: {
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
            disabled: {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            step: {
                type: 'number',
                value: '',
                default: '',
                isDefault: true
            },
            'show-input': {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            'show-stops':  {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            range: {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            vertical: {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            height: {
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
    let formItemAttr = getStringTypeAttr({label: attributes.label, prop: attributes.prop}, info.id, true)

    let template = `<el-form-item 
                        ${formItemAttr}>
                        <el-slider 
                            ${stringAttr}>
                        </el-slider>
                    </el-form-item>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
