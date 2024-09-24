import axios from "axios"

const aniwatch = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ANIWATCH_API_URI,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",


    }
});

export default aniwatch 
