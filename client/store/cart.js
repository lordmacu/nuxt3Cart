import { defineStore } from 'pinia'
import { useIndexStore } from '@/client/store/index'

export const useCartStore = defineStore('cart', {
    state: () => ({ isCart: false,isContent:true, products: []}),
    getters: {
        isShowCart: (state) => state.showCart,
       
    },
    actions: {
      showCart() {
        this.isCart= !this.isCart
      },
      showContent() {
        this.isCart= !this.isCart
      },
      forceCart(value) {
        this.isCart= value
      },
      forceContent(value) {
        this.isContent= value
      },
      checkCart(mobile){
        console.log(mobile);
        if(mobile){
            if(this.isCart){
                this.mobileCart=true;
            }else{
                this.mobileCart=false;
            }
        }else{
            this.mobileCart=true;
        }
      }
    },
  })