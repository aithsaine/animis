import Axios from "axios"
import { cache } from "react"
import axiosRetry from "axios-retry"
import { ImdbMediaInfo, TmdbSearchItem, TmdbSearchResult } from "../ts/interfaces/imdbInterfaces"
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

        return data as TmdbSearchResult

    }
    catch (err) {

        console.log(err)

        return null
    }

})


export const getMediaInfo = cache(async ({ search, mediaId, type, seachTitle, releaseYear }: {
    search: boolean,
    mediaId?: string,
    type: "TV Series",
    seachTitle?: string,
    releaseYear?: number
}) => {
    try {

        let mediaSearchedId: number | null = null
        let mediaSearchedType: string | null = null



        if (search && seachTitle) {


            const searchResults = await searchMedia({ mediaTitle: (stringToOnlyAlphabetic(String(seachTitle))) })
            console.log(searchResults)
            console.log(releaseYear)
            const filteredRes = searchResults?.results.find((item: TmdbSearchItem) => Number(item.releaseDate) == releaseYear)
            mediaSearchedId = filteredRes?.id || searchResults?.results[0]?.id || null
            mediaSearchedType = filteredRes?.type || searchResults?.results[0]?.type || null
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
