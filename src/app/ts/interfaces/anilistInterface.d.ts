interface AnilistMediaInfo {
    id: string,
    synonyms: string[],
    coverHash?: string,
    artwork?: any,
    episodes: {
        id: string,
        title: string,
        description: null | string,
        number: number,
        image: string,
        imageHash: string,
        airDate: null | number
    }[],
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
        native: string
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
        extraLarge: string
    },
    description: string,
    imageHash: string,

    status: String,
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
    studios: string[],
    type: string,
    recommendations: SimpleAnimeInfo[],
    characters: Character[],
    relations: {
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