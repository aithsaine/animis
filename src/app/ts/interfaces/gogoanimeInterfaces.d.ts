interface GogoAnimeSearch {
    currentPage: number,
    "hasNextPage": boolean,
    "results":
    {
        id: string,
        title: string,
        url: string,
        image: string,
        releaseDate: string,
        subOrDub: string
    }[],
}