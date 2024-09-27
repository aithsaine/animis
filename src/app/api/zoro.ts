import aniwatch from '@/tools/aniwatch';
import { cache } from "react"

export const searchAnime = cache(async ({ searchTitle }: { searchTitle: string }) => {

    try {
        const { data } = await aniwatch.get(`anime/search?q=${searchTitle}`)
        return data as ZoroSearchResult


    } catch (error) {
        return null

    }
}
)