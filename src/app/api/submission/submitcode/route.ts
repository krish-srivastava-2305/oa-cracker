import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest)=>{
    const {sourceCode, langID, input, output} = await req.json()

    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
          base64_encoded: 'true',
          wait: 'false',
          fields: '*'
        },
        headers: {
          'x-rapidapi-key': process.env.X_RAPID_KEY!,
          'x-rapidapi-host': process.env.X_RAPID_HOST!,
          'Content-Type': 'application/json'
        },
        data: {
          language_id: langID,
          source_code: btoa(sourceCode),
          stdin: btoa(input),
          expected_output: btoa(output)
        }
      };
    try {
        const response = await axios.request(options);
        if(response.data) {
            const res = NextResponse.json({message: "Code Executed Succesfully", data: response.data}, {status:200})
            const codeCookie = response.data.token;
            res.cookies.set("codeCookie", codeCookie)
            return res
            // const codeCookie = res.cookies.set("codeCookie", response.data.token)
        }
        else return NextResponse.json({message: "internal error"}, {status: 400})
    } catch (error) {
        console.error("some error",error);
    }
}