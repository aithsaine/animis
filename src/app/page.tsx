
import Popular from "@/components/Popular";
import { RecentEpisodes } from "@/components/recentEps";
import Caroussel from "@/components/ui/carroussel";
export const metadata = {
  title: 'Animis - Watch popular animes | Manga',
};
export default function Home() {
  return (
    <>

      <Caroussel />
      <Popular />
      <RecentEpisodes />

    </>
  );
}
