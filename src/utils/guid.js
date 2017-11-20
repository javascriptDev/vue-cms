export const guid =  () => { //获取随机ID，组件拖到预览视图后就会被设置个ID
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return '0' + s4() + s4()
}

// 检测是否id 合法
export const guidTest = (id) => {
	return /0\w{8}/.test(id)
}