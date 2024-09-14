import axios from "axios"

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ANIME_URI,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",

    },
});

export default api 
