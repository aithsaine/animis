interface Character {
    id: number,
    role: string,
    node: {

        name: {
            first: string,
            last: string | null,
            full: string,
            native: string,
            userPreferred: string
        },
        image: {
            medium: string
        },
    }
    imageHash: string,
    voiceActorRoles: {

        voiceActor:
        {
            id: number,
            language: string,
            name: {
                first: string,
                last: string | null,
                full: string,
                native: string,
                userPreferred: string
            },
            image: {
                medium: string
            },
            imageHash: string
        }

    }[]
}