import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state: () => ({ mobile:false}),
    getters: {
        isMobile: (state) => state.showCart,
    },
    actions: {
      setMobile(mobile) {
        this.mobile= mobile;
      },
    },
  })