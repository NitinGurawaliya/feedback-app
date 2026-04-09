import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest,res:NextResponse) {
    console.log("hello")

    return NextResponse.json({
        msg:"hello"
    })
    
}