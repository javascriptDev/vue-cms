/**
* 判断是不是json
* @param {[type]} text [description]
*/
export const JSONLike = (text) => {
    return /^[\],:{}\s]*$/.test(text
        .replace(/\\["\\\/bfnrtu]/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))
}
/**
 * 首字母大写
 */
export const Upper = (text) => {
	if (text.indexOf('-') !== -1) {
		return text.split('-').map(item => Upper(item)).join('')
	} else {
		return text.substr(0,1).toUpperCase() + text.substr(1)
	}
}