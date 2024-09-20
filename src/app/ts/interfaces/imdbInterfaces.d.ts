export interface ImdbSearchItem {

    id: number,
    title: string,
    image: string,
    type: string,
    rating: number,
    releaseDate: string

}
export interface ImdbMediaInfo {

    rating: number,
    id: string,
    title: string,
    type: string,
    image: string,
    cover: string,
    logos: {
        url: string,
        aspectRatio: number,
        width: number
    }[],
    seasons: {
        season: number,
        image: {
            hd: string,
            mobile: string
        },
        episodes: ImdbEpisode[]
    }[],

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