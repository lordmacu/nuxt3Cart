import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state: () => ({ mobile:false, isLoading:false}),
    getters: {
        isMobile: (state) => state.showCart,
    },
    actions: {
      setMobile(mobile) {
        this.mobile= mobile;
      },
      setLoading(loading) {
        this.isLoading= loading;
      },
    },
  })