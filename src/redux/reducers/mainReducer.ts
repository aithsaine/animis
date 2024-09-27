import { ADDAUTHENTICATEUSER, TOGGLEMODALAUTH, UPDATEACTIONSTATUS } from "../actions/types";
import { User as FirebaseUser } from "firebase/auth";

export type StatesType = {
    authenticate: FirebaseUser | null,
    action: string,
    isOpenLoginModal: boolean
};

const defaultState: StatesType = {
    authenticate: null,
    action: "signin",
    isOpenLoginModal: false
};

type Action =
    | { type: typeof ADDAUTHENTICATEUSER; payload: FirebaseUser | null }
    | { type: typeof UPDATEACTIONSTATUS; payload: string }
    | { type: typeof TOGGLEMODALAUTH; payload: boolean };

export const mainReducer = (state: StatesType = defaultState, action: Action): StatesType => {
    switch (action.type) {
        case ADDAUTHENTICATEUSER:
            return { ...state, authenticate: action.payload };
        case UPDATEACTIONSTATUS:
            return { ...state, action: action.payload };
        case TOGGLEMODALAUTH:
            return { ...state, isOpenLoginModal: action.payload };
        default:
            return state;
    }
};
