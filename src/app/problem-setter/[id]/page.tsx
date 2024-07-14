'use client';
import { problems } from '@/problems/problemData';
import React, { useEffect, useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import axios from "axios";
import { boilerPlateCodeCPP, boilerPlateCodePython, boilerPlateCodeJava } from '@/helper/boiler-plate';
import useLocalStorage from '@/hooks/useLocalStorage';

type Problem = {
  id: string,
  statement: string,
  description: string,
  input: string,
  output: string
};

type LanguageAndIdMap = {
  cpp: string,
  python: string,
  java: string
};

function Page() {
  const [prevCode, setPrevCode] = useLocalStorage('code', boilerPlateCodePython);
  const [prevLang, setPrevLang] = useLocalStorage('lang', 'python');
  const [prevLangId, setPrevLangId] = useLocalStorage('langId', '92');

  const [problemId, setProblemId] = useState<string>("");
  const [code, setCode] = useState<string>(prevCode);
  const [output, setOutput] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>(prevLang);
  const [langID, setLangID] = useState<number>(Number(prevLangId));
  const [input, setInput] = useState<string>("");
  const [expectedOutput, setExpectedOutput] = useState<string>("");
  const [compiledOutput, setCompiledOutput] = useState<string>("");
  const [statement, setStatement] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const languageAndIdMap: LanguageAndIdMap = {
    cpp: "54",
    python: "92",
    java: "67"
  };

  const [firstLoad, setFirstLoad] = useState<boolean>(true) 

  useEffect(() => {
    setCode(prevCode);
    setLangID(Number(prevLangId));
    setSelectedLanguage(prevLang);
  }, []);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false)
      return
    }

    if (selectedLanguage === "cpp") {
      setCode(boilerPlateCodeCPP);
      setPrevCode(boilerPlateCodeCPP);
      setLangID(Number(languageAndIdMap.cpp));
      setPrevLangId(languageAndIdMap.cpp);
    } else if (selectedLanguage === "python") {
      setCode(boilerPlateCodePython);
      setPrevCode(boilerPlateCodePython);
      setLangID(Number(languageAndIdMap.python));
      setPrevLangId(languageAndIdMap.python);
    } else if (selectedLanguage === "java") {
      setCode(boilerPlateCodeJava);
      setPrevCode(boilerPlateCodeJava);
      setLangID(Number(languageAndIdMap.java));
      setPrevLangId(languageAndIdMap.java);
    }
    setPrevLang(selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    const url = window.location.href;
    let id;
    if (url[url.length - 3] === '/') {
      id = url[url.length - 2] + url[url.length - 1];
    } else {
      id = (url[url.length - 1]);
    }

    const problemData = problems.find((p) => p.id === id);
    if (problemData) {
      setDescription(problemData.description);
      setStatement(problemData.statement);
      setInput(problemData.input);
      setExpectedOutput(problemData.output);
    }
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
    setPrevCode(value || '');
  };

  const handleRunCode = async () => {
    try {
      const result = await axios.post("/api/submission/submitcode", { langID, input, output: expectedOutput, sourceCode: prevCode });
      const res = await axios.get("/api/submission/evaluation");
      setTimeout(async () => {
        const newRes = await axios.get("/api/submission/evaluation");
        setOutput(String(newRes.data.status.description));
        setCompiledOutput(atob(newRes.data.compile_output) || "No compile output");
      }, 3000);
      setOutput(String(res.data.status.description));
      setCompiledOutput(atob(res.data.compile_output) || "No compile output");
    } catch (error) {
      setOutput(String(error));
    }
  };

  return (
    <div className='h-full w-full bg-black flex justify-center items-center'>
      <div className='h-full w-[50%] p-5 border-r-2 border-white flex flex-col justify-center items-center gap-10'>
        <h1 className='font-bold text-4xl text-gray-300 px-5'>{statement}</h1>
        <h3 className='font-basic text-lg text-gray-300 px-10'>{description}</h3>
        <div className='h-2/3 w-2/3 border-gray-100 border-2 rounded-xl'>
          <div className='h-16 w-full border-b-2 border-gray-300 flex justify-center items-center gap-60'>
            <div className='text-gray-300'>Input</div>
            <div className='text-gray-300'>Output</div>
          </div>
          <div className='h-[calc(100%-4rem)] w-full flex'>
            <div className='h-full w-1/2 border-r-2 border-gray-300 text-gray-300'>
              <Editor
                height="100%"
                defaultLanguage="plaintext"
                value={input}
                className='editor'
                options={{ scrollbar: { vertical: "hidden", horizontal: "hidden" }, readOnly: true, minimap: { enabled: false } }}
                theme='vs-dark'
              />
            </div>
            <div className='h-full w-1/2 text-gray-300'>
              <Editor
                height="100%"
                defaultLanguage="plaintext"
                value={expectedOutput}
                options={{ scrollbar: { vertical: "hidden", horizontal: "hidden" }, readOnly: true, minimap: { enabled: false } }}
                className='editor'
                theme='vs-dark'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='h-full w-[50%] bg-[#1E1E1E]'>
        <div className='h-[15%] w-full flex items-center bg-[#1E1E1E] border-b-2 border-gray-500'>
          <div className='h-full w-1/2 text-xl font-bold pl-6 text-gray-400 flex items-center'>Your Code:</div>
          <div className='h-full w-1/2 flex justify-end pr-6 gap-4 items-center'>
            <select
              className="bg-gray-800 text-white px-4 py-2 rounded"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
            <button onClick={handleRunCode} className='bg-green-600 text-white px-4 py-2 rounded'>
              Run Code
            </button>
          </div>
        </div>
        <div className='h-[65%] w-full'>
          <Editor
            height="100%"
            className='pt-2'
            language={selectedLanguage}
            value={prevCode}
            onChange={(value) => handleEditorChange(value || '')}
            options={{ minimap: { enabled: false } }}
            theme='vs-dark'
          />
        </div>
        <div className='h-[21%] w-full p-2 text-white bg-[#1E1E1E] flex flex-col'>
          <div className='h-1/3 w-full'>
            <h2 className='font-bold'>Output:</h2>
            <pre>{output}</pre>
          </div>
          <div className='w-full h-2/3'>
            <Editor
              height="80%"
              defaultLanguage="plaintext"
              value={compiledOutput}
              options={{ scrollbar: { vertical: "hidden", horizontal: "hidden" }, readOnly: true, minimap: { enabled: false } }}
              className='editor'
              theme='vs-dark'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
