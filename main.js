//const product = 'Socks'

const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: ['50% cotton', '30% wool', '20% polyester', '10% silk'],
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeCart(id) {
            const index = this.cart.indexOf(id)
            if(index > -1) {
                this.cart.splice(index, 1)
            }
        }
    }
})