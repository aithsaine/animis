
interface AniwatchSearchResult {
    animes:
    {
        id: string,
        name: string,
        jname: string,
        poster: string,
        duration: string,
        type: string,
        rating: string,
        episodes: {
            sub: number,
            dub: number | null
        }
    }[]
    ,
    currentPage: number,
    hasNextPage: boolean,
    totalPages: number,
    searchQuery: string,
}

interface AniwatchEpisodes {

    title: string,
    episodeId: string,
    number: number,
    isFiller: boolean

}


interface AniwatchEpisodeLinks {
    tracks:
    {
        file: string,
        label?: string,
        kind: string,
        default?: true
    }[]

    ,
    intro: {
        start: number,
        end: number
    },
    outro: {
        start: number,
        end: number
    },
    sources:
    {
        url: string,
        type: string
    }[]
    ,
    anilistID: number,
    malID: number
}