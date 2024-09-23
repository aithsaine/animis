import React, { useEffect, useState } from 'react'
import StreamingEpisode from './ui/streamingEpisode'

type Props = {
    tmdbEps: StreamingEpsiode[]
    anilistEpisodes: StreamingEpsiode[]
    anilistEpsCount: number;
    gogoAnimeEps: StreamingEpsiode[]
}

const Episodes = ({ tmdbEps, anilistEpisodes, anilistEpsCount, gogoAnimeEps }: Props) => {
    const [epsiodes, setEpisodes] = useState<StreamingEpsiode[]>([])

    useEffect(() => {
        if (tmdbEps.length !== gogoAnimeEps.length && anilistEpisodes?.length === gogoAnimeEps?.length) {

            setEpisodes(anilistEpisodes)
        }
        else if (tmdbEps?.length > 0 && tmdbEps?.length >= anilistEpisodes?.length && tmdbEps.length === gogoAnimeEps?.length) {

            setEpisodes(tmdbEps)
        }

        else
            setEpisodes(gogoAnimeEps)

    }, [])
    return (gogoAnimeEps &&
        <React.Fragment  >
            {epsiodes.map((item: StreamingEpsiode, index: number) => <StreamingEpisode episodeNumber={index + 1} title={item.title} thumbnail={item.thumbnail} key={index} />)}
        </React.Fragment>
    )
}

export default Episodes