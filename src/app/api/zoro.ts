import Fuse from 'fuse.js';
import consumet from "@/tools/consumet"


export const searchAnime = async ({ searchTitle }: { searchTitle: string }) => {

    try {
        const { data } = await consumet.get(`anime/zoro/${searchTitle}`)
        return data as ZoroSearchResult


    } catch (error) {
        return null

    }
}

export default {
    getZoroEpisodesWithInfo: async ({
        searchTitle,
        userPreferredTitle,
        type,
        episodes = 0,
    }: {
        searchTitle: string;
        type: string;
        userPreferredTitle: string;
        episodes: number;
    }) => {
        try {
            // Fetch the search results
            const SearchItems = await searchAnime({ searchTitle });

            // Ensure results exist
            if (!SearchItems?.results) {
                throw new Error('No search results found');
            }

            // Fuse.js options for fuzzy search
            const options = {
                includeScore: true,
                keys: ['title', 'japaneseTitle'], // Search both title and japaneseTitle
                threshold: 0.3, // Adjust threshold for fuzzy matching
            };

            const fuse = new Fuse(SearchItems.results, options);

            // Perform fuzzy search for both searchTitle and userPreferredTitle
            const results = fuse.search(searchTitle);
            const userPreferredResults = fuse.search(userPreferredTitle);

            // Filter based on type
            const filteredResults = results.filter(
                (result: any) =>
                    result.item?.type?.toUpperCase() === type.toUpperCase()
            );
            const filteredUserPreferredResults = userPreferredResults.filter(
                (result: any) =>
                    result.item?.type?.toUpperCase() === type.toUpperCase()
            );

            // Get the animeId from the best fuzzy match
            const animeId =
                filteredResults?.[0]?.item?.id ||
                filteredUserPreferredResults?.[0]?.item?.id;

            if (animeId) {
                // Fetch anime episodes by animeId
                const episodes = await consumet.get(`anime/zoro/info?id=${animeId}`);
                return episodes.data as ZeroAnimeInfo;
            } else {
                throw new Error('No matching anime found');
            }
        } catch (error) {
            console.error('Error fetching anime episodes:', error);
        }
    },
};
