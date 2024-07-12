import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest)=>{
    const {sourceCode, langID, stdin, stdout} = await req.json()
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
          base64_encoded: 'true',
          wait: 'false',
          fields: '*'
        },
        headers: {
          'x-rapidapi-key': 'c5c57be0c7msh7d7717368a4f95ep15bfe9jsn336ccb278c56',
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          language_id: langID,
          source_code: btoa(sourceCode),
          stdin: btoa(stdin),
          expected_output: btoa(stdout)
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