import { DBConnect } from "@/lib/DBconnect";
import UserModel from "@/models/user.model";
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export const POST = async (req: NextRequest) => {
    try {
        await DBConnect();

        // fetch data from req
        // check if user exists or not
        // if not send error
        // if exists then check pass
        // if pass holds generate jwt token and set cookie
        // if not send error

        const {username, password} = await req.json()
        const user = await UserModel.findOne({username})

        if(!user) return NextResponse.json({error: "User does not exists!!"}, {status: 400})

        const isPasswordCorrect: Promise<boolean> = bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) return NextResponse.json({error: "Incorrect Password!"}, {status: 400})
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET!, {expiresIn:"1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
        })
        return response;

    } catch (error) {
        return NextResponse.json({error: "Server Error"}, {status: 500})
    }
}