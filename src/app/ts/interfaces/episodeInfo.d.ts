interface EpisodeInfo {

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