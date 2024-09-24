import stringToOnlyAlphabetic from "@/lib/converString";
import aniwatch from "@/tools/aniwatch";
import { cache } from "react";


export async function searchAnime(searchTitle: string) {
    try {
        const { data } = await aniwatch.get(`anime/search?q=${stringToOnlyAlphabetic(searchTitle)}`)
        return data as AniwatchSearchResult;
    } catch (error) {
        return null;
    }

} export default {
    AniwatchStreamingEpisodes: cache(

        async (searchTitle: string, type: string) => {
            try {
                const searchResult = await searchAnime(searchTitle);
                const animeId: string | null = searchResult?.animes?.find(anime => type.toUpperCase()?.search(anime?.type?.toUpperCase()))?.id || null
                if (animeId) {
                    const { data } = await aniwatch.get(`anime/episodes/${animeId}`)
                    return data?.episodes as AniwatchEpisode[]
                }
                return null
            } catch (error) {
                return null

            }
        }
    )
}