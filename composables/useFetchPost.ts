export const useMyFetchPost = async (url, opts) => {
    const config = useRuntimeConfig()
 
    const requestFetch = await fetch(config.public.API_BASE_URL+url,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(opts)
    })
    const response = await requestFetch.json();
    return response;
  }