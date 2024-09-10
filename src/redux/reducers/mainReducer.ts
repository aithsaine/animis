import { ADDAUTHENTICATEUSER } from "../actions/types";


const defaultState = {
    authenticate: null,
    action: "signin"
}
type Action = {
    type: string,
    payload?: any

}
export const mainReducer = (state = defaultState, action: Action) => {
    switch (action.type) {
        case ADDAUTHENTICATEUSER:
            return { ...state, authenticate: action.payload }
    }
    return state;

}