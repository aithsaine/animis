"use client"; // Ensure this is at the top for Next.js

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '../../../public/assets/styles/subtitle.css'; // Import your custom styles
import { MediaPlayer, MediaProvider, Track } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import React from 'react';

type SubtitlesType = {
    file: string;
    label?: string;
    kind: string;
    default?: boolean;
};

interface VideoPlayerProps {
    subtitles: SubtitlesType[];
    videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ subtitles, videoSrc }) => {
    return (
        <MediaPlayer
            playsInline
            autoPlay
            src={videoSrc}
        >
            <MediaProvider>
                {subtitles?.map((subtitle) => (
                    <Track
                        key={subtitle.file}
                        src={subtitle.file}
                        kind={subtitle.kind as any}
                        label={subtitle.label}
                        lang={subtitle.label ? subtitle.label.toLowerCase() : undefined}
                        type="text/vtt"
                        default={subtitle.default}
                    />
                ))}
            </MediaProvider>

            <DefaultVideoLayout
                icons={defaultLayoutIcons}
            />
        </MediaPlayer>
    );
};

export default VideoPlayer;
