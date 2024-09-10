import { ADDAUTHENTICATEUSER, TOGGLEMODALAUTH, UPDATEACTIONSTATUS } from "./types"

export const addAuthenticateUser = (user: any) => {
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