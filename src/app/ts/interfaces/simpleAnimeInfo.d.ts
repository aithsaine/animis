interface SimpleAnimeInfo {
    id: number,
    malId: number,
    description?: string,
    title: {
        romaji: null | string,
        english: null | string,
        native: null | string,
        userPreferred: null | string
    },
    status: string,
    episodes: number,
    image: string,
    rating: number,
    imageHash: string,
    cover: string,
    coverHash: string,

    type: string
}
