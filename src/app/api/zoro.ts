import aniwatch from '@/tools/aniwatch';


export const searchAnime = async ({ searchTitle }: { searchTitle: string }) => {

    try {
        const { data } = await aniwatch.get(`anime/search?q=${searchTitle}`)
        return data as ZoroSearchResult


    } catch (error) {
        return null

    }
}
