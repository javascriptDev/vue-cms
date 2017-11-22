import {
    getTemplate,
    getSlotContent,
    getStringTypeAttr
} from '@/components/template'
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
                rm: true,
                isDefault: true
            },
            prop: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true,
                rm: true
            },
            name: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            id: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            size: {
                type: 'selection',
                value: 'large',
                items: ['large', 'mini', 'small'],
                default: 'large',
                isDefault: true
            },
            disabled: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            clearable: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            filterable: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            loading: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            popperClass: {
                type: 'text',
                value: '',
                key: '下拉框的类名',
                default: '',
                isDefault: true
            },
            noMatchText: {
                type: 'text',
                value: '无匹配',
                key: '搜索条件无匹配时显示的文字',
                default: '无匹配',
                isDefault: true
            },
            noDataText: {
                type: 'text',
                value: '无数据',
                default: '无数据',
                isDefault: true
            },
            multiple: {
                type: 'boolean',
                value: false,
                default: false,
                isDefault: true
            },
            multipleLimit: {
                type: 'number',
                value: '',
                key: '多选时用户最多可以选择的项目数',
                default: '',
                isDefault: true
            },
            placeholder: {
                type: 'text',
                value: '请选择',
                default: '请选择',
                isDefault: true
            },
            list: {
                type: 'object',
                value: '[{"value": "demo", "label": "例子"}, {"value": "demo1", "label": "例子2"}]',
                default: '',
                bind: true,
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
    let formItemAttr = getStringTypeAttr({
        label: attributes.label,
        prop: attributes.prop
    }, info.id, true)

    let template = `<el-form-item 
                        ${formItemAttr}>
                        <el-select 
                            ${stringAttr}>
    						<el-option
    						    v-for="item in ${info.id}.list"
    						        :key="item.value"
    					            :label="item.label"
    					            :value="item.value">
    					            <span style="float: left">{{ item.label }}</span>
    					            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    						</el-option>
                        </el-select>
                    </el-form-item>`
        //删除自定义非ui属性
    return {
        template,
        attributes,
        slots
    }
}
export default handle