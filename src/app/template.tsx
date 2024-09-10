"use client"
import Modal from "@/components/authenticate"
import Loading from "@/components/loading"
import Nav from "@/components/nav"
import { useAuth } from "@/hooks/useAuth"
import { addAuthenticateUser, toggleModalAuth, updateActionStatus } from "@/redux/actions/actionCreator"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Template({ children }: { children: React.ReactNode }) {
    const { isOpenLoginModal }: any = useSelector((state) => state)
    const dispatch = useDispatch()
    // const action: any = useSelector((state: any) => state.action)
    const { user, loading } = useAuth()
    useEffect(() => {
        if (user) {
            dispatch(addAuthenticateUser(user))
        }
    }, [loading])
    if (loading) {
        return <Loading />
    }
    return (<>
        <Nav />
        <Modal handleClose={() => {
            dispatch(toggleModalAuth(false))
            dispatch(updateActionStatus("signin"))
        }} isOpen={isOpenLoginModal} />


        {children}
    </>)
}