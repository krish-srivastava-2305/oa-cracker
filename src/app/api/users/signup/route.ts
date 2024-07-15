import UserModel from "@/models/user.model"
import { DBConnect } from "@/lib/DBconnect"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req: NextRequest){
    DBConnect();
    try {
        const {username, email, password} = await req.json()

        const user = await UserModel.findOne({username})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const salts = await bcrypt.genSalt(16)
        const hashedPass = await bcrypt.hash(password, salts)

        const newUser = new UserModel({
            email,
            password: hashedPass,
            username
        })

        const createdUser = await newUser.save()

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            createdUser
        })

    } catch (error) {
        console.error("Server Down")
        process.exit(1)
    }

}