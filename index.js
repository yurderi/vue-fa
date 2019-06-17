export default {
    install(Vue, options) {
        Vue.component('fa', require('@fortawesome/vue-fontawesome').default)

        require('@fortawesome/fontawesome-free-brands')
        require('@fortawesome/fontawesome-free-solid')
        require('@fortawesome/fontawesome-free-regular')
    }
}