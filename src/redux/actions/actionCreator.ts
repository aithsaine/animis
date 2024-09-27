import { ADDAUTHENTICATEUSER, TOGGLEMODALAUTH, UPDATEACTIONSTATUS } from "./types"
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