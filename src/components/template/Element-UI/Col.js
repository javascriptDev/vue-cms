import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

var handle = function(_attr, _slots, info) {
        //定义默认属性
        let attributes = {
            span: {
                type: 'number',
                value: 12
            },
            offset: {
                type: 'number',
                value: 0
            },
            // 栅格向左移动格数
            pull: {
                type: 'number',
                value: 0
            },
            // 栅格向右移动格数
            push: {
                type: 'number',
                value: 0
            },
            xs: {
                type: 'text',
                value: ''
            },
            sm: {
                type: 'text',
                value: ''
            },
            md: {
                type: 'text',
                value: ''
            },
            lg: {
                type: 'text',
                value: ''
            }
        },
        slots = {
            default: []
        }

        //覆盖默认属性
        Object.assign(attributes, _attr, info.id)
        Object.assign(slots, _slots)

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
        let template = `<el-col 
						${stringAttr}>
                        ${subContent}
					</el-col>`
        //删除自定义非ui属性

        return { template, attributes, slots }
}
export default handle
