import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', {
    state: () => ({ categories: [], products: [] }),
    actions: {
        async getCategories() {
            this.categories = await useFetchGet('/products/categories')
        },
        async getProducts() {
            this.products = await useFetchGet('/products')
        },
        async getProductsByCategory(cat) {
            this.products=[]
            this.products= await useFetchGet('/products/byCategory/'+cat)
           
        },
    },
})