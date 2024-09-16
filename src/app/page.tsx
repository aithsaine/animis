
import Popular from "@/components/Popular";
import { RecentEpisodes } from "@/components/recentEps";
import Caroussel from "@/components/ui/carroussel";
import VideoPlayer from "@/components/ui/videoPlayer";
export const metadata = {
  title: 'Animis - Watch popular animes | Manga',
};
export default function Home() {
  return (
    <>

      <Caroussel />
      <RecentEpisodes />
      <Popular />
      {/* <VideoPlayer
        videoSrc={"https://eb.netmagcdn.com:2228/hls-playback/6bad66e945c851b0ce0cda2d993bd6ab0f177e531d132d4b68d66ba95f6fbabf0193efeb286abd5cef6b6344c610b3df9375b705b6ed1a945e11b5209fe01a4aa1770819d87eed0bf9b60d77eb859364d4640e68f6209b3dd84449ec1d0b1c1c413d2e0cd596367085de3e61e121d2fc1b76f03df7202f728fd2d77211a2594d3607320e9eb4ffcca7fd8e9f97f25849/master.m3u8"}
        introDuration={1345}
        subtitles={[
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",
            label: "Arabic - العربية (Arabic)"
          },
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/eng-3.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "English"
          },
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/fre-6.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "French - Français (France)"
          },
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ger-2.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "German - Deutsch"
          },
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ita-9.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "Italian - Italiano (Italian)"
          },
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/por-4.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "Portuguese - Português (Brasil)"
          },
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/rus-8.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "Russian - Русский (Russian)"
          },
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/spa-10.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "Spanish - Español (España)"
          },
          {
            src: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/spa-5.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "Spanish - Español (LA)"
          },
          {
            src: "https://s.megastatics.com/thumbnails/891bcc461bc651324e6043b099f043ba/thumbnails.vtt",
            language: "https://s.megastatics.com/subtitle/fa6423d95507c06d2aad3cffe6bd0ea6/ara-7.vtt",

            label: "Thumbnails"
          }
        ]}
      /> */}
    </>
  );
}
