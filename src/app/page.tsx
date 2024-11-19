
import RecentEpisodes from "@/components/recentEpisodes";
import { TrendingAnimes } from "@/components/trendingAnimes";
import Caroussel from "@/components/ui/carroussel";
export const metadata = {
  title: 'Animis - Watch popular animes | Manga',
};
export default function Home() {
  return (
    <>
      <Caroussel />
      <RecentEpisodes />
      <TrendingAnimes />
    </>

  );
}
