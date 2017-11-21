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
                value: ''
            },
            formLabel: {
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
      		name: {
      			type: 'text',
      			value: ''
      		},
      		border: {
      			type: 'boolean',
      			value: false
      		},
      		size: {
      			type: 'selection',
      			value: '',
      			items: ['', 'medium', 'small', 'mini']
      		},
            text: {
                type: 'text',
                value: 'radio'
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
                        <el-radio 
                            ${stringAttr}>
                            {{${info.id}.text}}
                        </el-radio>
                    </el-form-item>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
