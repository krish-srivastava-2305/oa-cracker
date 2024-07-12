import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    // Access the cookie named "codeCookie"
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
            'x-rapidapi-key': 'c5c57be0c7msh7d7717368a4f95ep15bfe9jsn336ccb278c56',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
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
