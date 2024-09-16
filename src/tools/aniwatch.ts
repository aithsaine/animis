import axios from "axios"

const consumet = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ANIWATCH_API_URI,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",

    },
});

export default consumet 
