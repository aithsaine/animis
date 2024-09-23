import React, { useEffect, useState } from 'react'
import StreamingEpisode from './ui/streamingEpisode'

type Props = {
    tmdbEps: StreamingEpsiode[]
    anilistEpisodes: StreamingEpsiode[]
    anilistEpsCount: number;
    gogoAnimeEps: StreamingEpsiode[];
    episodesCount: number | null
}

const Episodes = ({ tmdbEps, anilistEpisodes, anilistEpsCount, gogoAnimeEps, episodesCount }: Props) => {
    const [epsiodes, setEpisodes] = useState<StreamingEpsiode[]>([])
    useEffect(() => {
        if (episodesCount && anilistEpisodes?.length === episodesCount) {

            setEpisodes(anilistEpisodes)
        }
        else if (episodesCount && tmdbEps?.length > 0 && tmdbEps?.length >= episodesCount) {

            setEpisodes(tmdbEps)
        }

        else
            setEpisodes(gogoAnimeEps)

    }, [])
    return (epsiodes &&
        <React.Fragment  >
            {epsiodes.map((item: StreamingEpsiode, index: number) => <StreamingEpisode episodeNumber={index + 1} title={item.title} thumbnail={item.thumbnail} key={index} />)}
        </React.Fragment>
    )
}

export default Episodes