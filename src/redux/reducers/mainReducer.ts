import { ADDAUTHENTICATEUSER, TOGGLEMODALAUTH, UPDATEACTIONSTATUS } from "../actions/types";


const defaultState = {
    authenticate: null,
    action: "signin",
    isOpenLoginModal: false
}
type Action = {
    type: string,
    payload?: any

}
export const mainReducer = (state = defaultState, action: Action) => {
    switch (action.type) {
        case ADDAUTHENTICATEUSER:
            return { ...state, authenticate: action.payload }
        case UPDATEACTIONSTATUS:
            return { ...state, action: action.payload }
        case TOGGLEMODALAUTH:
            return { ...state, isOpenLoginModal: action.payload }
        default:
            return state
    }
    return state;

}