'use client';
import { problems } from '@/problems/problemData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from "axios"
import { boilerPlateCodeCPP, boilerPlateCodePython } from '@/helper/boiler-plate';


type Problem = {
  id: string,
  statement: string,
  description: string,
  input: string,
  output: string
}

function Page() {
//   const router = useRouter();
  const [problemId, setProblemId] = useState<string>("");
  const [code, setCode] = useState<string>(boilerPlateCodeCPP);
  const [output, setOutput] = useState<string>('');

  useEffect(() => {
    const url = window.location.href;
    if (url[url.length - 2] === "/") {
      setProblemId(url[url.length - 1]);
    } else {
      setProblemId(url[url.length - 2] + url[url.length - 1]);
    }
  }, []);

  const problemData = problems.find((p) => p.id === problemId);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleRunCode = async ()=>{
        try {
            const result = await axios.post("/api/submission/submitcode", {langID: 54, problemId, sourceCode: code});
            // const token = result.data.data.token
            const res = await axios.get("/api/submission/evaluation")
            console.log("res: ", res)
            setTimeout(async ()=>{
                const newRes = await axios.get("/api/submission/evaluation")
                console.log("NewRes: ", newRes)
                setOutput(String(newRes.data.status.description));
            },3000)
            setOutput(String(res.data.status.description));
        } catch (error) {
            setOutput(String(error));
        }
    }

  if (!problemData) {
    return <div>Loading...</div>; // Or handle no data found case
  }

  return (
    <div className='h-full w-full bg-black flex justify-center items-center'>
      <div className='h-full w-[50%] p-5 border-r-2 border-white'>
        <h1 className='font-bold text-4xl text-gray-300'>{problemData?.statement}</h1>
        <h3 className='font-basic text-lg text-gray-300'>{problemData?.description}</h3>
        <div className='h-2/3 w-2/3 border-gray-100 border-2 rounded-xl'>
          <div className='h-16 w-full border-b-2 border-graytext-gray-300 flex justify-center items-center gap-60'>
            <div className='text-gray-300'>Input</div>
            <div className='text-gray-300'>Output</div>
          </div>
          <div className='h-[calc(100%-4rem)] w-full flex'>
            <div className='h-full w-1/2 border-r-2 border-graytext-gray-300 text-gray-300'>
                <Editor
                    height="100%"
                    defaultLanguage="bat"
                    value={problemData?.input}
                    className='editor'
                    options={{scrollbar:{vertical:"hidden", horizontal:"hidden"}, readOnly: true, minimap:{enabled:false}}}
                    theme='vs-dark'
                />
            </div>
            <div className='h-full w-1/2 text-gray-300'>
                <Editor
                    height="100%"
                    defaultLanguage="bat"
                    value={problemData?.output}
                    options={{scrollbar:{vertical:"hidden", horizontal:"hidden"}, readOnly: true, minimap:{enabled:false}}}
                    className='editor'
                    theme='vs-dark'
                />
          </div>
          </div>
        </div>
      </div>
      <div className='h-full w-[50%]'>
        <div className='h-[15%] w-full flex items-center justify-center'>
          <button onClick={handleRunCode} className='bg-green-600 text-white px-4 py-2 rounded'>
            Run Code
          </button>
        </div>
        <div className='h-[65%] w-full'>
          <Editor
            height="100%"
            defaultLanguage="cpp"
            value={code}
            onChange={handleEditorChange}
            options={{minimap:{enabled:false}}}
            theme='vs-dark'
          />
        </div>
        <div className='h-[21%] w-full p-2 text-white'>
          <h2 className='font-bold'>Output:</h2>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default Page;
