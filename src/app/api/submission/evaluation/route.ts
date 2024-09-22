import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    const codeCookie = req.cookies.get('codeCookie')?.value;

    if (!codeCookie) {
        return NextResponse.json({ message: "Cookie not found" }, { status: 400 });
    }

    const options = {
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/submissions/${codeCookie}`,
        params: {
            base64_encoded: 'true',
            fields: '*'
        },
        headers: {
            'x-rapidapi-key': process.env.X_RAPID_KEY!,
            'x-rapidapi-host': process.env.X_RAPID_HOST!,
        }
    };

    try {
        const response = await axios.request(options);
        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching submission", error }, { status: 500 });
    }
}
