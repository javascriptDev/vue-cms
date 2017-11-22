import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

var handle = function(_attr, _slots, info) {
        //定义默认属性
        let attributes = {
            model: {
                type: 'object',
                value: JSON.stringify({
                    name: '',
                    age: ''
                }),
                bind: true
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
                }),
                bind: true
            },
            inline: {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            'label-position': {
                type: 'selection',
                value: 'left',
                default: 'left',
                items: ['right', 'left', 'top'],
                isDefault: true
            },
            'label-width': {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            'inline-message': {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
            },
            'status-icon': {
                type: 'boolean',
                value:  false,
                default: false,
                isDefault: true
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
