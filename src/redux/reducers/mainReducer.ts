import { ADDAUTHENTICATEUSER, PASS_TO_NEXT_POPULAR_PAGE, TOGGLEMODALAUTH, UPDATEACTIONSTATUS } from "../actions/types";
import { User as FirebaseUser } from "firebase/auth";

export type StatesType = {
    authenticate: FirebaseUser | null,
    action: string,
    isOpenLoginModal: boolean,
    trendingPage: number,
    trendingAnimes: TrendingAnime[]
};

const defaultState: StatesType = {
    authenticate: null,
    action: "signin",
    isOpenLoginModal: false,
    trendingPage: 1,
    trendingAnimes: []
};

type Action =
    | { type: typeof ADDAUTHENTICATEUSER; payload: FirebaseUser | null }
    | { type: typeof UPDATEACTIONSTATUS; payload: string }
    | { type: typeof TOGGLEMODALAUTH; payload: boolean }
    | { type: typeof PASS_TO_NEXT_POPULAR_PAGE, payload: TrendingAnime[] };

export const mainReducer = (state: StatesType = defaultState, action: Action): StatesType => {
    switch (action.type) {
        case ADDAUTHENTICATEUSER:
            return { ...state, authenticate: action.payload };
        case UPDATEACTIONSTATUS:
            return { ...state, action: action.payload };
        case TOGGLEMODALAUTH:
            return { ...state, isOpenLoginModal: action.payload };
        case PASS_TO_NEXT_POPULAR_PAGE:
            if (state?.trendingAnimes[state?.trendingAnimes.length - 1]?.id !== action.payload[action.payload.length - 1]?.id) {

                return { ...state, trendingPage: state.trendingPage + 1, trendingAnimes: state.trendingAnimes.concat(action.payload) }
            }
            return state
        default:
            return state;
    }
};
