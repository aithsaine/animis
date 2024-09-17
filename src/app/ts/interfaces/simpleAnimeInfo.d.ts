interface SimpleAnimeInfo {
    id: number,
    malId: number,
    title: {
        romaji: string,
        english: string,
        native: string,
        userPreferred: string
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
