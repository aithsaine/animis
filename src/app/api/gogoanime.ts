import stringToOnlyAlphabetic from "@/lib/converString"
import consumet from "@/tools/consumet"

export const searchMedia = async (searchTitle: string) => {
    try {
        const res = await consumet.get(`anime/gogoanime/${searchTitle}`)

        return res.data as GogoAnimeSearch || []

    } catch (error) {

        console.log(error)
    }
}

export default {
    getGogoAnimeMediaInfo: async ({ searchTitle, releasedYear }:
        {
            searchTitle: string,
            releasedYear: number

        }
    ) => {
        try {
            const searchRes = await searchMedia(stringToOnlyAlphabetic(searchTitle))
            const filteredRes = searchRes?.results.find((item: any) => Number(item.releaseDate) == releasedYear)
            const searchedId = filteredRes?.id || searchRes?.results[0]?.id

            const { data } = await consumet.get(`/anime/gogoanime/info/${searchedId || ""}`)
            return data
        } catch (error) {
            console.log(error)

        }

    }
}