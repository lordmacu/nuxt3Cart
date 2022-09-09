export const useFetchGet = async (url, opts) => {
    const config = useRuntimeConfig()
 
    const requestFetch = await fetch(config.public.API_BASE_URL+url)
    const response = await requestFetch.json();
    return response;
  }