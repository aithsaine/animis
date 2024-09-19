interface SpotlighItem {
    id: string,
    name: string,
    jname: string,
    poster: string,
    description: string,
    rank: number,
    otherInfo: string[],
    episodes: {
        sub: number,
        dub: number,
    },
    otherInfo: string[]
}