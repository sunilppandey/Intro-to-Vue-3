//const product = 'Socks'

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            inventory: 11,
            onSale: true
        }
    }
})