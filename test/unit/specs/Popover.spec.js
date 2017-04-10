import Vue from 'vue'
import Popover from '@/components/popover/Popover.vue'

describe('Popover', () => {
  it('should be ok if no trigger present', (done) => {
    const Constructor = Vue.extend(Popover)
    const vm = new Constructor().$mount()
    vm.$nextTick(() => {
      vm.$destroy()
      done()
    })
  })

  it('should be able to show popover on init', (done) => {
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    let res = Vue.compile('<popover v-model="show"><button data-role="trigger"></button></popover>')
    let vm = new Vue({
      data () {
        return {
          show: true
        }
      },
      components: {Popover},
      render: res.render,
      staticRenderFns: res.staticRenderFns
    })
    vm.$mount('#app')
    setTimeout(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(1)
      app.remove()
      vm.$destroy()
      done()
    }, 200)
  })
})
