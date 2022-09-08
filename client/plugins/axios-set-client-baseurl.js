export default function ({ $axios }) {
    if (process.client) {
      $axios.setBaseURL('http://localhost:3001')
    }
  }