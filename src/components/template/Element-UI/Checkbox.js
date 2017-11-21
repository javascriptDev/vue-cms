import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            'v-model': {
                type: 'text',
                value: ''
            },
            label: {
              type: 'text',
              value: 'checkbox'
            },
            formLabel: {
                type: 'text',
                value: ''
            },
            prop: {
              type: 'text',
              value: ''
            },
            'true-label': {
              type: 'text',
              value: '是'
            },
            'false-label': {
              type: 'text',
              value: '否'
            },
            size: {
              type: 'selection',
              value:  '',
              items: ['', 'medium', 'small', 'mini']
            },
            disabled: {
              type: 'boolean',
              value:  false
            },
            border: {
              type: 'boolean',
              value:  false
            },
            name: {
              type: 'text',
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

    let template = `<el-form-item 
                        label="${attributes.formLabel.value}"
                        prop="${attributes.prop.value}"
                        >
                        <el-checkbox 
                            ${stringAttr}>
                        </el-checkbox>
                    </el-form-item>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
