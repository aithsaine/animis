interface Character {
    id: number,
    role: string,
    name: {
        first: string,
        last: string | null,
        full: string,
        native: string,
        userPreferred: string
    },
    image: string,
    imageHash: string,
    voiceActors:
    {
        id: number,
        language: string,
        name: {
            first: string,
            last: string | null,
            full: string,
            native: 長谷川育美,
            userPreferred: string
        },
        image: string,
        imageHash: string
    }[]

}