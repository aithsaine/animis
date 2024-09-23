import Axios from "axios";
import axiosRetry from "axios-retry";

// Anilist GraphQL API URL
const ANILIST_GRAPHQL_URL = 'https://graphql.anilist.co';
axiosRetry(Axios, {
    retries: 3,
    retryDelay: (retryAttempt) => retryAttempt * 1200,
    retryCondition: (error) => error.response?.status == 500 || error.response?.status == 404 || error.response?.status == 503,
    onRetry: (retryNumber) => console.log(`retry: ${retryNumber} ${retryNumber == 3 ? " - Last Attempt" : ""}`)
})
// Define the GraphQL query for fetching media by ID
const mediaByIdQueryRequest = (id: String) =>
    `
    query {
        Media(id: ${id})
        {
                            title{
                                romaji
                                native
                                english
                                userPreferred
                            }
                                episodes
                            description(asHtml: true)
                            isAdult
                            status
                            relations{
                                nodes{
                                    id
                                            type
                                            format
                                            title{
                                                romaji
                                                native
                                                english
                                                userPreferred
                                            }
                                            coverImage{
                                                large
                                                extraLarge
                                                medium
                                            }
                                    }
                                }
                                    episodes
                                    chapters
                                    volumes
                                    duration
                                    source
                                    countryOfOrigin
                                    trailer{
                                        id
                                        site
                                        thumbnail
                                    }
                                    updatedAt
                                    favourites
                                    tags{
                                        name
                                        description
                                        isAdult
                                        isMediaSpoiler
                                    }
                                    characters(sort: [ROLE, FAVOURITES_DESC]){
                                        edges{
                                            id
                                            role
                                            node{
                                                name{
                                                    full
                                                    native
                                                    alternative
                                                }
                                                image{
                                                    large
                                                    medium
                                                }
                                                gender
                                                age
                                            }
                                            voiceActorRoles(language: JAPANESE){
                                                voiceActor{
                                                    id
                                                    name{
                                                        first
                                                        middle
                                                        last
                                                        full
                                                        native
                                                        alternative
                                                    }
                                                    image{
                                                        large
                                                        medium
                                                    }
                                                    description
                                                    age
                                                }
                                            }
                                        }
                                    }
                                    recommendations{
                                        edges{
                                            node{
                                                id
                                                mediaRecommendation{
                                                    id
                                                    seasonYear
                                                    genres
                                                    type
                                                    format
                                                    title{
                                                        romaji
                                                        native
                                                        english
                                                        userPreferred
                                                    }
                                                    coverImage{
                                                        extraLarge
                                                        large
                                                        medium
                                                        color
                                                    }
                                                }
                                            }
                                        }
                                    }
                            studios(isMain: true){
                                        edges{
                                            node{
                                                name
                                                id
                                                isAnimationStudio
                                                siteUrl
                                            }
                                        }
                                    }
                            streamingEpisodes{
                                        title
                                        thumbnail
                                        url
                                        site
                            }
                            relations {
                                edges {
                                    id
                                    relationType
                                    isMainStudio
                                    characterRole
                                    characterName
                                    roleNotes
                                    dubGroup
                                    staffRole
                                    favouriteOrder
                                    node {
                                        id
                                        genres
                                        idMal
                                        type
                                        format
                                        status
                                        description
                                        season
                                        seasonYear
                                        seasonInt
                                        episodes
                                        duration
                                        chapters
                                        volumes
                                        countryOfOrigin
                                        isLicensed
                                        source
                                        hashtag
                                        updatedAt
                                        bannerImage
                                        genres
                                        synonyms
                                        averageScore
                                        meanScore
                                        popularity
                                        isLocked
                                        trending
                                        favourites
                                        isFavourite
                                        isFavouriteBlocked
                                        isAdult
                                        siteUrl
                                        autoCreateForumThread
                                        isRecommendationBlocked
                                        isReviewBlocked
                                        modNotes
                                    }
                                }
                                nodes {
                                    id
                                    idMal
                                    type
                                    genres
                                    format
                                    status
                                    description
                                    season
                                    seasonYear
                                    seasonInt
                                    episodes
                                    duration
                                    chapters
                                    volumes
                                    countryOfOrigin
                                    isLicensed
                                    source
                                    hashtag
                                    updatedAt
                                    bannerImage
                                    genres
                                    synonyms
                                    averageScore
                                    meanScore
                                    popularity
                                    isLocked
                                    trending
                                    favourites
                                    isFavourite
                                    isFavouriteBlocked
                                    isAdult
                                    siteUrl
                                    autoCreateForumThread
                                    isRecommendationBlocked
                                    isReviewBlocked
                                    modNotes
                                }
                            }
                            averageScore
                            nextAiringEpisode{
                                        id
                                        episode
                                        airingAt
                                }
                                startDate{
                                        year
                                        month
                                        day
                                }
                                endDate{
                                        year
                                        month
                                        day
                                }
                            season
                            seasonYear
                            isAdult
                            id
                            coverImage{
                                        extraLarge
                                        large
                                        medium
                                        color
                            }
                            bannerImage
                            type
                            hashtag
                            favourites
                            trending
                            format
                            genres
                            popularity
                            averageScore
                        
                }
    }
`;

// getMediaInfo method to fetch media data
export default {
    getMediaInfo: async (id: String) => {
        try {
            // Construct the GraphQL query
            const graphqlQuery = {
                query: mediaByIdQueryRequest(id),
            };

            // Make the POST request to the Anilist GraphQL API
            const { data } = await Axios({
                url: ANILIST_GRAPHQL_URL,
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                },
                data: graphqlQuery,
            });

            // Return the media data
            return data.data.Media as AnilistMediaInfo;

        } catch (error: any) {
            console.error("Error fetching media info:", error.response?.data || error.message);
            return null;
        }
    },
    getStreamingEpisodesPaginated: async (mediaId: number, page: number = 1, perPage: number = 10) => {
        const query = `
    query ($mediaId: Int!, $page: Int!, $perPage: Int!) {
      Media(id: $mediaId) {
        streamingEpisodes(page: $page, perPage: $perPage) {
          edges {
            node {
              episodeNumber
              episodeTitle
              streamingUrl
            }
          }
          pageInfo {
            currentPage
            hasNextPage
            total
          }
        }
      }
    }
  `;

        const variables = {
            mediaId,
            page,
            perPage,
        };

        try {
            const { data } = await Axios.post(ANILIST_GRAPHQL_URL, {
                query,
                variables,
            });

            return data.data.Media.streamingEpisodes;
        } catch (error) {
            console.error("Error fetching episodes:", error);
            return null;
        }
    }

}
    ;
