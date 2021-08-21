import Vue from 'vue'
import Lazyload from 'vue-lazyload'
Vue.use(Lazyload, {
    loading: require('assets/img/common/imgloading.png')
})