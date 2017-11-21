import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

var handle = function(_attr, _slots, info) {
        //定义默认属性
        let attributes = {
            model: {
                type: 'object',
                value: JSON.stringify({
                    name: '',
                    age: ''
                })
            },
            rules: {
                type: 'object',
                value: JSON.stringify({
                    "name": [
                        { "required": true, "message": "请输入姓名", "trigger": 'blur' }
                    ],
                    "age": [
                        { "required": true, "message": "请输入姓名", "trigger": 'blur' }
                    ]
                })
            },
            inline: {
                type: 'boolean',
                value:  false
            },
            'label-position': {
                type: 'selection',
                value: '',
                items: ['' ,'right', 'left', 'top']
            },
            'label-width': {
                type: 'text',
                value: ''
            },
            'inline-message': {
                type: 'boolean',
                value:  false
            },
            'status-icon': {
                type: 'boolean',
                value:  false
            },
            size: {
                type: 'selection',
                value: '',
                items: ['', 'medium', 'small', 'mini']
            }
        },
        slots = {
            default: []
        }

        //覆盖默认属性
        Object.assign(attributes, _attr)
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
        let template = `<el-form 
						${stringAttr}>
                        ${subContent}
					</el-form>`
        //删除自定义非ui属性

        return { template, attributes, slots }
}
export default handle
