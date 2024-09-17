interface AnimeInfo {
    id: string,
    title:
    {
        romaji: string,
        english: string,
        native: string
    },
    malId: integer,
    trailer: {
        id: string,
        site: string,
        thumbnail: string,
        thumbnailHash: null | string

    },
    image: string,
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
    rating: integer,
    genres: string[],
    season: string,
    studios: string[],
    type: string,
    recommendations: SimpleAnimeInfo[],
    characters: character[],
    relations: {
        id: integer,
        relationType: string,
        malId: integer,
        title: string[],
        status: string,
        episodes: integer,
        image: string,
        color: string,
        type: string,
        cover: string,
        rating: integer,
    }[],
}