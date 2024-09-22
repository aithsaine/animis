import React, { useEffect, useState } from 'react'
import StreamingEpisode from './ui/streamingEpisode'

type Props = {
    tmdbEps: StreamingEpsiode[]
    anilistEpisodes: StreamingEpsiode[]
}

const Episodes = ({ tmdbEps, anilistEpisodes }: Props) => {
    const [epsiodes, setEpisodes] = useState<StreamingEpsiode[]>([])

    useEffect(() => {
        if (tmdbEps?.length > anilistEpisodes?.length) {
            setEpisodes(tmdbEps)
        }
        else {
            setEpisodes(anilistEpisodes)
        }
    }, [tmdbEps, anilistEpisodes])

    return (
        <React.Fragment  >
            {epsiodes.map((item: StreamingEpsiode, index: number) => <StreamingEpisode title={item.title} thumbnail={item.thumbnail} key={index} />)}
        </React.Fragment>
    )
}

export default Episodes