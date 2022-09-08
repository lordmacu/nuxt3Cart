import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', {
    state: () => ({ categories: [], products: [] }),
    actions: {
        getBaseUrl() {
            const config = useRuntimeConfig()
             return config.public.API_BASE_URL;
        },
        async getCategories() {
            const config = useRuntimeConfig()
            const { data } = await useFetch(this.getBaseUrl()+'/products/categories')
            console.log(data,"sasdffsdfasd");
            this.categories = data.value;

        },
        async getProducts() {
            const config = useRuntimeConfig()
          
            const { data } = await useFetch(this.getBaseUrl()+'/products')
       
            this.products = data.value;

        },
    },
})