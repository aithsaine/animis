interface AnilistMediaInfo {
    id: string,
    synonyms: string[],
    coverHash?: string,
    format: string,
    episodes: number,
    bannerImage:string,
    averageScore: number,
    streamingEpisodes: {

        site: string,
        thumbnail: string,
        title: string,
        url: string

    }[],
    title:
    {
        romaji: string,
        english: string,
        native: string,
        userPreferred: string
    },
    nextAiringEpisode?: {
        airingTime: number,
        timeUntilAiring: number,
        episode: number
    },
    totalEpisodes: number,
    currentEpisode: number,
    duration: number,
    subOrDub?: string,


    malId: number,
    trailer: {
        id: string,
        site: string,
        thumbnail: string,
        thumbnailHash: null | string

    },
    image: string,
    isLicensed?: boolean,
    isAdult?: boolean,
    countryOfOrigin?: string,

    popularity: number,
    color: string,
    coverImage: {
        extraLarge: string,
        color: string
    },
    description: string,
    imageHash: string,

    status: string,
    releaseDate: number,
    startDate: {
        year: number,
        month: number,
        day: number
    },
    endDate: {
        year: number,
        month: number,
        day: number
    },
    rating: number
    genres: string[],
    season: string,
    studios: {
        edges: {
            node: {
                name: string

            },
        }[]
    },
    type: string,
    recommendations: { edges: RecommendItem[] },
    characters: { edges: Character[] },
    relations: {
        nodes: {
            id: string, description: string, coverImage: { extraLarge: string }, title: { romaji: string },
        }[],
        edges: {
            id: number,
            relationType: string,
            malId: number,
            title: {
                romaji: null | string,
                english: null | string,
                native: null | string,
                userPreferred: null | string
            },
            imageHash?: string,
            coverHash?: string,

            status: string,
            episodes: number,
            image: string,
            color: string,
            type: string,
            cover: string,
            rating: number,
        }[],
    }
}

interface RecommendItem {
    node: {
        mediaRecommendation: {
            coverImage: { extraLarge: string ,large:string;medium:string},
            title: {
                romaji: string
            }
        }

    }
}
interface RelatedItem {
    id: string
    coverImage: { extraLarge: string },
    title: {
        romaji: string
    }, image?: string,
    description: string | null,
    status?: string,
    type?: string,
    episodes?: number,
    releaseDate?: number,
    format?: string,
    seasonYear?: number

}
type TrendingAnime = {
    id?: string,
    title: {
        romaji: string,
        english: string,
        native: string,
        userPreferred: string
    },
    image: string,
    type: string,
    rating: number,
    releaseDate: string
}

interface RecentEpisode {
    id: string,
    malId: string,
    title: {
        romaji: string,
        english: string,
        native: string
    },
    image: string,
    imageHash: string,
    episodeId: string,
    episodeTitle: string,
    episodeNumber: number,
    type: string
}