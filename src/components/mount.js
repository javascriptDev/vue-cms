import Vue from 'vue'
import preview from './preview'
//给定模板，和要挂载的元素id，挂载组件
var mount = function(id, _component, data) {
    let components = _Vue.$store.state.components
    let component = components.find(c => c.info.id === id)
    return new Promise((resolve, reject) => {
        //需要延迟才能取到document.getElementById(id)
        setTimeout(() => {
            if (component.uid) { //销毁旧实例

            }
            let vm = new Vue({
                name: id.toString(),
                data() {
                    return buildData(data)
                },
                template: _component.template,
                el: document.getElementById(id),
                created() {
                    console.log(this)
                },
                mounted() {
                    this.$el.id = id
                    if (component) {
                        component.uid = this._uid
                    }

                    //添加选中效果
                    let info = _Vue.$store.state.currentComponent.info
                    if (!info)
                        this.$el && this.$el.click()
                }
            })
            resolve(vm)

        }, 200)
    })
}

/**
* 判断是不是json
* @param {[type]} text [description]
*/
function JSONLike(text) {
    return /^[\],:{}\s]*$/.test(text
        .replace(/\\["\\\/bfnrtu]/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))
}

/**
 * 转换对象
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function buildData(source) {
    let result = {}

    function rec(obj, tpl) {
        for (let k in obj) {
            let v = obj[k]

            if(typeof v === 'object') {
                !tpl[k] && (tpl[k] = Object.prototype.toString.call(v) === '[object Object]' ? {} : [])
                rec(obj[k], tpl[k])
            } else {
                if(typeof v === 'string' && v !== '') {
                    console.log('json like')
                    console.log(v)
                    console.log(JSONLike(v))
                    JSONLike(v) && (v = JSON.parse(v))
                }
                tpl[k] = v
            }
        }
    }
    rec(source, result)
    console.log(result)
    return result
}

export default mount
