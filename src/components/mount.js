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
                    return data
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

export default mount
