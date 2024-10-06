interface StreamingEpsiode {
    id: string,
    title: string,
    thumbnail: string,
    description: string,
}


interface TmdbEps {
    id: string,
    title: string,
    episode: number,
    season: number,
    releaseDate: string,
    description: string,
    url: string,
    img: {
        mobile: string,
        hd: string
    }
}