import stringToOnlyAlphabetic from "@/lib/converString"
import consumet from "@/tools/consumet"
import { cache } from "react"

export const searchMedia = cache(async (searchTitle: string) => {
    try {
        const res = await consumet.get(`anime/gogoanime/${searchTitle}`)

        return res.data as GogoAnimeSearch || []

    } catch (error) {

        console.log(error)
    }
})
const gogoanime =
{
    getGogoAnimeMediaInfo: cache(async ({ searchTitle, releasedYear }:
        {
            searchTitle: string,
            releasedYear: number
        }
    ) => {
        try {
            const searchRes = await searchMedia(decodeURIComponent(stringToOnlyAlphabetic(searchTitle)))
            const filteredRes = searchRes?.results.find((item) => Number(item.releaseDate) == releasedYear)
            const searchedId = filteredRes?.id || searchRes?.results[0]?.id

            const { data } = await consumet.get(`/anime/gogoanime/info/${searchedId || ""}`)
            return data as GogoAnimeInfo
        } catch (error) {
            console.log(error)

        }

    })
}
export default gogoanime