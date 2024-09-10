import { ADDAUTHENTICATEUSER } from "./types"

export const addAuthenticateUser = (user: any) => {
    return {
        type: ADDAUTHENTICATEUSER,
        payload: user
    }
}