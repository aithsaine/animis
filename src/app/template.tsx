"use client"
import Modal from "@/components/authenticate"
import Footer from "@/components/footer"
import Loading from "@/components/loading"
import Nav from "@/components/nav"
import { useAuth } from "@/hooks/useAuth"
import { addAuthenticateUser, toggleModalAuth, updateActionStatus } from "@/redux/actions/actionCreator"
import { StatesType } from "@/redux/reducers/mainReducer"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"




export default function Template({ children }: { children: React.ReactNode }) {
    const isOpenLoginModal = useSelector((state: StatesType) => state.isOpenLoginModal)
    const dispatch = useDispatch()
    // const action: any = useSelector((state: any) => state.action)
    const { user, loading } = useAuth()
    useEffect(() => {
        if (user) {
            dispatch(addAuthenticateUser(user));
        }
    }, [user, dispatch]);

    if (loading) {
        return <Loading />
    }
    return (<>
        <Nav />

        <Modal handleClose={() => {
            dispatch(toggleModalAuth(false))
            dispatch(updateActionStatus("signin"))
        }} isOpen={isOpenLoginModal} />

        <main className="min-h-screen   scrollbar-hide ">

            {children}
        </main>
        <Footer />
    </>)
}