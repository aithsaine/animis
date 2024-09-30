import { ADDAUTHENTICATEUSER, PASS_TO_NEXT_POPULAR_PAGE, RECENTEPISODES, TOGGLEMODALAUTH, UPDATEACTIONSTATUS } from "./types"
import { User } from "firebase/auth"

export const addAuthenticateUser = (user: User | null) => {
    return {
        type: ADDAUTHENTICATEUSER,
        payload: user
    }
}

export const updateActionStatus = (status: string) => {
    return {
        type: UPDATEACTIONSTATUS,
        payload: status
    }
}

export const toggleModalAuth = (isOpen: boolean) => {
    return {

        type: TOGGLEMODALAUTH,
        payload: isOpen
    }
}

export const GoToNextPopularPage = (data: TrendingAnime[]) => {
    return {
        type: PASS_TO_NEXT_POPULAR_PAGE,
        payload: data
    }
}

export const StoreRecentEpisodes = (data: RecentEpisode[]) => {
    return {
        type: RECENTEPISODES,
        payload: data
    }
}