interface ZoroSearchResult {
    currentPage: number,
    hasNextPage: boolean,
    totalPages: number,
    results: SearchItem[]
}
interface SearchItem {
    id: string,
    title: string,
    duration: string,
    japaneseTitle: string,
    type: string,
    nsfw: boolean,
    sub: number,
    dub: number,
    episodes: number
}
interface ZeroEpisode {
    id: string,
    isFiller: boolean,
    number: number,
    title: string
}

interface ZeroAnimeInfo {
    id: string,
    title: string,
    malID: number,
    alID: number,
    japaneseTitle: string,
    image: string,
    description: string,
    type: string,
    episodes: ZeroEpisode[],
    totalEpisodes: number,
    hasSub: boolean,
    hasDub: boolean
}