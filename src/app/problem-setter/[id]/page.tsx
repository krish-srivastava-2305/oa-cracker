'use client'
import { problemFinder } from '@/helper/problemFinder'
import { problems } from '@/problems/problemData'
import { IconMathPiDivide2 } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import React,{useEffect, useState} from 'react'

type problem = {
    id: string,
    statement: string,
    description: string
    input: string,
    output: string
}

function page() {
    const router = useRouter()
    const [problemId, setProblemId] = useState<string>("")
    useEffect(() => {
        const url = window.location.href
        if((url[url.length - 2]) === "/") setProblemId(url[url.length - 1])
        else setProblemId(url[url.length - 2] + url[url.length - 1]) 
    }, []);

    const problemData = problems.find((p)=> p.id === problemId)
    console.log(problemData)

  return (
    <div className='h-full w-full bg-black flex justify-center items-center'>
      <div className='h-full w-[55%] p-5'>
        <h1 className='font-bold text-4xl text-gray-300'>{problemData?.statement}</h1>
        <h3 className='font-basic text-lg text-gray-300'>{problemData?.description}</h3>
        <div className='h-2/3 w-2/3 border-gray-100 border-2 rounded-xl'>
            <div className='h-16 w-full border-b-2 border-graytext-gray-300 flex justify-center items-center gap-60'>
                <div className='text-gray-300'>Input</div>
                <div className='text-gray-300'>Output</div>
            </div>
            <div className='h-[calc(100%-4rem)] w-full flex'>
                <div className='h-full w-1/2 border-r-2 border-graytext-gray-300 text-gray-300'>{problemData?.input}</div>
                <div className='h-full w-1/2 text-gray-300'>{problemData?.output}</div>
            </div>
        </div>
      </div>
      <div className='h-full w-[45%] bg-blue-500'></div>
    </div>
  )
}

export default page
