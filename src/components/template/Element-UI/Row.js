import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            gutter: {type: 'number', value: 2},
            type: {type: 'selection', value: '', items: ['', 'flex']},
            justify: {
                type: 'selection',
                value: '',
                items: ['start', 'end', 'center', 'space-between', 'space-around']
            },
            align: {
            	type: 'selection',
                items: ['start', 'end', 'center', 'baseline', 'stretch'],
            	value: ''
            }

        },
        slots = {
            default: []
        }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //获取插槽模板内容
    var subContent = getSlotContent(slots)

    //设置当前组件的slot
    if (attributes.slot && attributes.slot!=='default') {
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

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id)
    let template = `<el-row 
						${stringAttr}>
                        ${subContent}
					</el-row>`
    //删除自定义非ui属性

    return { template, attributes, slots }
}
export default handle
