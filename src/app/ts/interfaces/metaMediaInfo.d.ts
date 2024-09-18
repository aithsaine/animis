interface MetaMediaInfo {
    id: string,
    synonyms: string[],
    coverHash?: string,
    episodes: {
        id: string,
        title: string,
        description: null | string,
        number: number,
        image: string,
        imageHash: string,
        airDate: null | number
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


    malId: integer,
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
    cover: string,
    description: string,
    imageHash: string,

    status: String,
    releaseDate: integer,
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
        id: integer,
        relationType: string,
        malId: integer,
        title: {
            romaji: null | string,
            english: null | string,
            native: null | string,
            userPreferred: null | string
        },
        imageHash?: string,
        coverHash?: string,

        status: string,
        episodes: integer,
        image: string,
        color: string,
        type: string,
        cover: string,
        rating: integer,
    }[],
}