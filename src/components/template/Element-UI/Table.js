import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import elementUIICon from '../../elementUIIconList'

var handle = function(_attr, _slots, info) {
    //定义默认属性
    let attributes = {
            data: {
                type: 'object',
                value: '',
                default: '',
                isDefault: true,
                bind: true
            },
            height: {
                type: 'text',
                value: '',
                default: '',
                isDefault: true
            },
            'default-sort': {
                type: 'selection',
                value: 'ascending',
                items: ['ascending', 'descending'],
                default: 'ascending',
                isDefault: true
            },
            'empty-text': {
                type: 'text',
                value: '暂无数据',
                default: '暂无数据',
                isDefault: true
            },
            columns: {
                type: 'object',
                value: '',
                default: '',
                isDefault: true,
                rm: true
            },
            stripe: {
                type: 'boolean',
                value:  false,
                default:  false,
                isDefault: true,
                key: '斑马纹'
            },
            border: {
                type: 'boolean',
                value:  false,
                default:  false,
                isDefault: true
            },
            size: {
                type: 'selection',
                value: 'medium ',
                items: ['medium', 'small', 'mini'],
                default: 'medium',
                isDefault: true
            },
            'show-header': {
                type: 'boolean',
                value: true,
                default: true,
                isDefault: true
            },
            'highlight-current-row': {
                type: 'boolean',
                value:  false,
                default:  false,
                isDefault: true
            },
        },
        slots = {
            default: []
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes, info.id, true)
    let template = `<el-table 
                        ${stringAttr}>
                        <el-table-column
                            v-for="item in ${info.id}.columns"
                            :prop="item.prop"
                            :label="item.label">
                        </el-table-column>
                    </el-table>`
    //删除自定义非ui属性
    return { template, attributes, slots }
}
export default handle
