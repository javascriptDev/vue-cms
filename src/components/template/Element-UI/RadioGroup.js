import {
    getTemplate,
    getSlotContent,
    getStringTypeAttr
} from '@/components/template'
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
            'v-model': {
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
    let formItemAttr = getStringTypeAttr({
        label: attributes.label,
        prop: attributes.prop
    }, info.id)

    //获取插槽模板内容
    var subContent = getSlotContent(slots)

    //设置当前组件的slot
    if (attributes.slot && attributes.slot !== 'default') {
        attributes.slot = {
            type: 'text',
            value: attributes.slot
        }
    } else {
        attributes.slot = {
            type: 'text',
            value: ''
        }
    }
    let template = `<el-form-item 
                        ${formItemAttr}>
                        <el-radio-group 
                            ${stringAttr}>
                            ${subContent}
                        </el-radio-group>
                    </el-form-item>`
        //删除自定义非ui属性
    return {
        template,
        attributes,
        slots
    }
}
export default handle