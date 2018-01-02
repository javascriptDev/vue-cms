
/**
 * 数据验证默认值
 */
export const Tpl = {
	// 必须
  	required: true,
  	// 数据类型
  	type: 'string',
  	// 触发验证方式
  	trigger: 'change',
  	// 字段
  	field: '',
  	// 长度闲置类型 -> len: 定长 max,min: 区间
  	len: '',
  	// 可变选项
  	options: {
    	// 数据类型为正则时,需要
    	pattern: '',
    	// 数据类型为枚举时,需要
    	enum: '',
    	// 定长
    	len: '',
    	// 最小长度
    	min: '',
    	// 最大长度
    	max: '',
    	// 两个字段的值一样
    	same: '',
    	// 长度不符合提示文字
    	lenErrorTxt: '',
    	// 必要不符合提示文字
    	requiredErrorTxt: '',
    	// 正则验证错误提示文字
    	patternErrorTxt: '',
    	// 相同值错误提示文字
    	sameErrorTxt: ''
  	}
};

/**
 * 获取一个规则的模板，
 * @param  {模板数据} initData
 * @return {Object}
 */
export const getTpl = (initData) => {
	if (!initData)
		return Tpl
	return Object.assign(JSON.parse(JSON.stringify(Tpl)), initData)
}

/**
 * 可验证数据类型
 */
export const DataTypeEnum = [
    {
        type: '字符串',
        value: 'string'
    }, {
        type: '数字',
        value: 'number'
    }, {
        type: '布尔',
        value: 'boolean'
    }, {
        type: '函数',
        value: 'function'
    }, {
        type: '正则',
        value: 'pattern'
    },  {
        type: '整型',
        value: 'interger'
    }, {
        type: '浮点型',
        value: 'float'
    }, {
        type: '数组',
        value: 'array'
    }, {
        type: '对象',
        value: 'object'
    }, {
        type: '日期',
        value: 'date'
    }, {
        type: 'URL',
        value: 'url'
    }, {
        type: '十六进制',
        value: 'hex'
    }, {
        type: '邮箱',
        value: 'email'
    }, {
        type: 'same as',
        value: 'same'
    }
];

/**
 * 长度枚举
 */
export const LenEnum = [
    {
        type: '无',
        value: ''
    }, {
        type: '固定长度',
        value: 'len'
    }, {
        type: '范围(range)',
        value: 'min,max'
    }
];

/**
 * 触发类型枚举
 */
export const TriggerType = [
	{
        type: '文字改变',
        value: 'change'
    }, {
        type: '失去焦点',
        value: 'blur'
    }
]
