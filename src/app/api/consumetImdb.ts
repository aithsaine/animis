import Axios from "axios"
import { cache } from "react"
import axiosRetry from "axios-retry"
import { ImdbMediaInfo } from "../ts/interfaces/imdbInterfaces"
import stringToOnlyAlphabetic from "@/lib/converString"
axiosRetry(Axios, {
    retries: 1,
    retryDelay: (retryAttempt) => retryAttempt * 1000,
    retryCondition: (error) => error.response?.status == 500 || error.response?.status == 503,
    onRetry: (retryNumber) => console.log(`retry: ${retryNumber} ${retryNumber == 3 ? " - Last Attempt" : ""}`)
})

export const searchMedia = cache(async ({ mediaTitle }: { mediaTitle: string }) => {

    try {

        const { data } = await Axios({
            url: `${process.env.NEXT_PUBLIC_CONSUMET_API_URI}/meta/tmdb/${mediaTitle}`,
            method: "GET"
        })

        return data

    }
    catch (err) {

        console.log(err)

        return null
    }

})


export const getMediaInfo = cache(async ({ search, mediaId, type, seachTitle, releaseYear }: {
    search: boolean,
    mediaId?: String,
    type: "TV Series",
    seachTitle?: String,
    releaseYear?: Number
}) => {

    try {

        let mediaSearchedId: number | null = null
        let mediaSearchedType: string | null = null



        if (search && seachTitle) {


            const searchResults = await searchMedia({ mediaTitle: encodeURIComponent(stringToOnlyAlphabetic(String(seachTitle))) })
            const filteredRes = searchResults.results.find((item: any) => Number(item.releaseDate) == releaseYear)
            console.log(filteredRes)
            console.log(searchResults)
            mediaSearchedId = filteredRes?.id || searchResults?.results[0]?.id
            mediaSearchedType = filteredRes?.type || searchResults?.results[0]?.type
        }
        const { data } = await Axios({
            url: `${process.env.NEXT_PUBLIC_CONSUMET_API_URI}/meta/tmdb/info/${mediaSearchedId || mediaId}?type=${mediaSearchedType || type}`,
            method: "GET"
        })

        return data as ImdbMediaInfo

    }
    catch (err) {

        console.log(err)

        return null

    }

})
