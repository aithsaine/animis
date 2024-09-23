"use client"
// import styles from "./component.module.css"
import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'
import { MediaPlayer, MediaProvider, Track } from '@vidstack/react'
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default'
import { CaptionsFileFormat, CaptionsParserFactory } from 'media-captions'

import React from 'react'

type SubtitlesType = {
    src: string | undefined,
    kind: string | TextTrackKind,
    label: string | undefined,
    srcLang: string | undefined,
    type: string | CaptionsParserFactory | undefined,
    default: boolean | undefined,
}






const VideoPlayer = ({ subtitles, videoSrc }: any) => {




    return (


        <MediaPlayer
            playsInline
            autoPlay
            src={videoSrc}
        // className={styles.container}
        // title={`Ep. ${episodeInfo.episodeNumber} - ${mediaInfo.title.userPreferred}`}
        >

            {/* <SkipIntroOrOutroButton
                callFunction={() => skipEpisodeIntroOrOutro()}
                isActive={timeskipLimit != null}
                isAnimationActive={enableAutoSkipIntroAndOutro}
            /> */}

            {/* <NextEpisodeButton
                callFunction={() => handlePlayNextEpisode()}
                isActive={(nextEpisodeInfo && showActionButtons) ? true : false}
            /> */}

            <MediaProvider>
                {subtitles?.map((subtitle: SubtitlesType) => (
                    <Track
                        key={subtitle.src}
                        src={subtitle.src}
                        kind={subtitle.kind as TextTrackKind}
                        label={subtitle.label}
                        lang={subtitle.srcLang}
                        type={subtitle.kind as CaptionsFileFormat}
                        default={subtitle.default}
                    />
                ))}
            </MediaProvider>

            <DefaultVideoLayout
                icons={defaultLayoutIcons}
            // thumbnails={mediaInfo.bannerImage || undefined}
            />

        </MediaPlayer >

    );
};

export default VideoPlayer;
