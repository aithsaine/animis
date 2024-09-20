import axios from "axios"

const consumet = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CONSUMET_API_URI,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",


    }
});

export default consumet 
