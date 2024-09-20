import Axios from "axios"
import { cache } from "react"
import axiosRetry from "axios-retry"
import { ImdbMediaInfo, ImdbSearchItem } from "../ts/interfaces/imdbInterfaces"
import stringToOnlyAlphabetic from "@/lib/converString"
import consumet from "@/tools/consumet"
axiosRetry(Axios, {
    retries: 1,
    retryDelay: (retryAttempt) => retryAttempt * 1000,
    retryCondition: (error) => error.response?.status == 500 || error.response?.status == 503,
    onRetry: (retryNumber) => console.log(`retry: ${retryNumber} ${retryNumber == 3 ? " - Last Attempt" : ""}`)
})

export const searchMedia = async ({ mediaTitle }: { mediaTitle: string }) => {

    try {
        const { data } = await consumet.get(`meta/tmdb/${mediaTitle}`)

        return data

    }
    catch (err) {

        console.log(err)

        return null
    }

}

const getMediaInfo =
    async ({ tmdbId, type }: {
        tmdbId?: string,
        type?: "TV Series",
    }) => {

        try {
            const { data } = await consumet.get(`${process.env.NEXT_PUBLIC_CONSUMET_API_URI}/meta/tmdb/info/${tmdbId}?type=${type}`)
            return data


            // const { data } = await Axios({
            //     url: `${process.env.NEXT_PUBLIC_CONSUMET_API_URI}/meta/tmdb/info/${mediaSearchedId || mediaId}?type=${mediaSearchedType || type}`,
            //     method: "GET"
            // })

            // return data as ImdbMediaInfo

        }
        catch (err) {

            console.log(err)

            return null

        }

    }

export default getMediaInfo