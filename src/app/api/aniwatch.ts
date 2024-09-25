import stringToOnlyAlphabetic from "@/lib/converString";
import aniwatch from "@/tools/aniwatch";
import { cache } from "react";

type SearchParams = {
    searchTitle: string,
    startDate?: string,
    type?: string
}
export async function searchAnime({ searchTitle, startDate, type }: SearchParams) {
    try {
        const { data } = await aniwatch.get(`anime/search`, {
            params: {
                q: stringToOnlyAlphabetic(searchTitle),
                start_date: startDate,
                type: type?.toLowerCase()
            }
        })
        return data as AniwatchSearchResult;
    } catch (error) {
        return null;
    }

} export default {
    AniwatchStreamingEpisodes: cache(

        async (searchTitle: string, type: string, startDate: string = "", totalEpisodes: number | null) => {
            console.log(totalEpisodes)
            try {
                const searchResult = await searchAnime({ searchTitle, startDate, type });
                const filterName = searchResult?.animes.find((anime: any) => stringToOnlyAlphabetic(anime?.name?.toUpperCase()) == stringToOnlyAlphabetic(searchTitle?.toUpperCase()))
                const filterRes = searchResult?.animes.find((item: any) => item?.episodes?.sub == totalEpisodes)
                const animeId: string | null = filterName?.id || filterRes?.id || null
                if (animeId) {
                    const { data } = await aniwatch.get(`anime/episodes/${animeId}`)
                    return data?.episodes as AniwatchEpisodes[]
                }
                return null
            } catch (error) {
                return null

            }
        }
    )
}