export interface ImdbSearchItem {

    id: number,
    title: string,
    image: string,
    type: string,
    rating: number,
    releaseDate: string

}

export interface TmdbSearchItem {
    id: number,
    title: string,
    image: string,
    type: string,
    rating: number,
    releaseDate: string
}
export interface TmdbSearchResult {
    currentPage: number,
    hasNextPage: boolean,
    results: TmdbSearchItem[]
}
export interface ImdbMediaInfo {
    media: {

        rating: number,
        id: string,
        title: { romaji: string },
        type: string,
        startDate: {
            year: number
        },
        seasons: { episodes: { title: string }[] }[]
        image: string,
        cover: string,
        totalEpisodes: number | null,
        releaseDate: string
        trailer: {
            id: string,
            site: string,
            url: string
        },
        logos: {
            url: string,
            aspectRatio: number,
            width: number
        }[],


    },
    seasons: {
        season: number,
        image: {
            hd: string,
            mobile: string
        },
        episodes: ImdbEpisode[]
    }[],
    totalEpisodes: number,
    cover: string,
    logos: { url: string }[],
    trailer: {
        id: string
    }
}

export interface ImdbEpisode {
    id: string,
    title: string,
    episode: number,
    season: number,
    releaseDate: string,
    description: string,
    url: string,
    img: {
        hd: string,
        mobile: string
    }
}

export interface ApiMediaResults extends ApiDefaultResult {

    hashtag: string,
    favourites: number,
    source: string,
    duration: number | null,
    volumes: number | null,
    chapters: number | null,
    characters: {
        edges: [{
            id: number,
            node: {
                image: {
                    large: string,
                    medium: string
                },
                name: {
                    full: string
                }
            },
            voiceActorRoles: [{
                voiceActor: {
                    id: number,
                    image: {
                        large: string,
                        medium: string
                    },
                    name: {
                        full: string
                    }
                }
            }]
        }]
    },
    streamingEpisodes: EpisodesType[]
    studios: {
        edges: [{
            node: {
                name: string,
                id: number
                isAnimationStudio: boolean,
                siteUrl: string
            }
        }]
    },
    relations: {
        nodes: ApiDefaultResult[]
    },
    recommendations: {
        edges: [{
            node: {
                mediaRecommendation: ApiDefaultResult
            }
        }]
    }

}