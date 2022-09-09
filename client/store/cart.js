import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ isCart: false, isContent: true, products: [], cartId: {}, total: 0 }),

  actions: {

    showCart() {
      this.isCart = !this.isCart
    },
    showContent() {
      this.isCart = !this.isCart
    },
    forceCart(value) {
      this.isCart = value
    },
    forceContent(value) {
      this.isContent = value
    },
    checkCart(mobile) {
      console.log(mobile);
      if (mobile) {
        if (this.isCart) {
          this.mobileCart = true;
        } else {
          this.mobileCart = false;
        }
      } else {
        this.mobileCart = true;
      }
    },
    async getCartId() {

      const { token_cart } = await useFetchGet('/cart/getCartId')
      this.cartId = token_cart;

    },
    async setTotal(total) {

      this.total = total;

    },
    async getCart() {

      this.products = await useFetchGet('/cart/' + this.cartId)

    },
    async addCart(product) {

      await useMyFetchPost('/cart/addToCart', {
        cart_id: this.cartId,
        product_id: product
      })

    },
  },
})