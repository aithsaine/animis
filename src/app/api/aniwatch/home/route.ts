import aniwatch from "@/tools/aniwatch"
import Axios from "axios"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest) {
    try {
        const response = await aniwatch.get("/anime/home")
        return NextResponse.json(response.data)
    } catch (error) {
        return NextResponse.json({ message: "internal server error", error }, { status: 500 })
    }
}