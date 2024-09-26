import stringToOnlyAlphabetic from "@/lib/converString";
import aniwatch from "@/tools/aniwatch";
import Fuse from "fuse.js";
import { cache } from "react";



export const searchAnime = async (searchTitle: string) => {

    try {
        const { data } = await aniwatch.get(`anime/search?q=${searchTitle}`)
        return data as AniwatchSearchResult


    } catch (error) {
        return null

    }
}

export default {
    AniwatchStreamingEpisodes: cache(

        async (searchTitle: string, userPreferredTitle: string, type: string) => {

            try {
                // Fetch the search results
                const SearchItems = await searchAnime(searchTitle);

                // Ensure results exist
                if (!SearchItems?.animes) {
                    throw new Error('No search results found');
                }

                // Fuse.js options for fuzzy search
                const options = {
                    includeScore: true,
                    keys: ['name', 'jname'], // Search both title and japaneseTitle
                    threshold: 0.3, // Adjust threshold for fuzzy matching
                };

                const fuse = new Fuse(SearchItems.animes, options);

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

                    const { data } = await aniwatch.get(`anime/episodes/${animeId}`)
                    return data?.episodes as AniwatchEpisodes[]

                } else {
                    return null
                }
            } catch (error) {
                return null
            }
        }
    ),
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
            const SearchItems = await searchAnime(searchTitle);

            // Ensure results exist
            if (!SearchItems?.animes) {
                throw new Error('No search results found');
            }

            // Fuse.js options for fuzzy search
            const options = {
                includeScore: true,
                keys: ['name', 'jname'], // Search both title and japaneseTitle
                threshold: 0.3, // Adjust threshold for fuzzy matching
            };

            const fuse = new Fuse(SearchItems.animes, options);

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
                const info = await aniwatch.get(`anime/info?id=${animeId}`);

                const episodes = await aniwatch.get(`anime/episodes/${animeId}`)
                return { info: info?.data?.anime?.info, episodes: episodes?.data?.episodes };

            } else {
                throw new Error('No matching anime found');
            }
        } catch (error) {
            console.error('Error fetching anime episodes:', error);
        }
    },
    getStreamingEpisodeLinks: async ({ episodeId }: { episodeId: string }) => {
        try {
            const { data } = await aniwatch?.get(`/anime/episode-srcs?id=${episodeId}&category=sub`)
            return data as AniwatchEpisodeLinks
        } catch (error) {
            return null

        }
    }
}