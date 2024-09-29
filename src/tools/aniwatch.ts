import Axios from "axios"
import axiosRetry from "axios-retry"
axiosRetry(Axios, {
    retries: 3,
    retryDelay: (retryAttempt) => retryAttempt * 1200,
    retryCondition: (error) => error.response?.status == 500 || error.response?.status == 404 || error.response?.status == 503,
    onRetry: (retryNumber) => console.log(`retry: ${retryNumber} ${retryNumber == 3 ? " - Last Attempt" : ""}`)
})

const aniwatchApi = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_ANIWATCH_API_URI,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",


    }
});

export default aniwatchApi
