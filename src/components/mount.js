import Vue from 'vue'
import preview from './preview'
import { JSONLike } from '../utils/tools'
//给定模板，和要挂载的元素id，挂载组件
var mount = function(id, _component, data) {
    let components = _Vue.$store.state.components
    let component = components.find(c => c.info.id === id)
    return new Promise((resolve, reject) => {
        //需要延迟才能取到document.getElementById(id)
        setTimeout(() => {
            if (component.uid) { //销毁旧实例

            }
            let holder = document.getElementById(id)
            if(!holder) {
                let div = document.createElement('div')
                div.id = id
                document.getElementById('preview-area').appendChild(div)
            }
            let vm = new Vue({
                name: id.toString(),
                data() {
                    return buildData(data)
                },
                template: _component.template,
                el: document.getElementById(id),
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
                    JSONLike(v) && (v = JSON.parse(v))
                }
                tpl[k] = v
            }
        }
    }
    rec(source, result)
    return result
}

export default mount
