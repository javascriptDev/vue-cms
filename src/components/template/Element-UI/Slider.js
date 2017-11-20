import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            min: {
                type: 'number',
                value: ''
            },
            max: {
                type: 'number',
                value: ''
            },
            disabled: {
                type: 'boolean',
                value:  false
            },
            step: {
                type: 'number',
                value: ''
            },
            'show-input': {
                type: 'boolean',
                value:  false
            },
            'show-stops':  {
                type: 'boolean',
                value:  false
            },
            range: {
                type: 'boolean',
                value:  false
            },
            vertical: {
                type: 'boolean',
                value:  false
            },
            height: {
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
    let template = `<el-slider 
                        ${stringAttr}>
                    </el-slider>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
