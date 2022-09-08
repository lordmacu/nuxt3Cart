export const useMyFetch = (request, opts) => {
    const config = useRuntimeConfig()
    console.log(config.public);
    return useFetch(() => request, { baseURL: config.public.apiBase, ...opts })
  }