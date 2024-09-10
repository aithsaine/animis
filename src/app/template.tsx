"use client"
import Loading from "@/components/loading"
import Nav from "@/components/nav"
import { useAuth } from "@/hooks/useAuth"
import { addAuthenticateUser } from "@/redux/actions/actionCreator"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function Template({ children }: { children: React.ReactNode }) {
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

        {children}
    </>)
}