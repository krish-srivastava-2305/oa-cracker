'use client';
import React, { useState, useEffect } from 'react';
import { problems } from '@/problems/problemData';
import Link from 'next/link';
import useLocalStorage from '@/hooks/useLocalStorage';

type ProblemObject = {
  id: string;
  statement: string;
  input: string;
  output: string;
};

function Page() {
  const [prevQues, setPrevQues] = useLocalStorage('ques', '[]');
  const [ques, setQues] = useState<Array<ProblemObject>>(JSON.parse(prevQues));
  const [numOfQues, setNumOfQues] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNumOfQues(value);

    const selectedQuestions: ProblemObject[] = [];
    for (let i = 0; i < value; i++) {
      const quesIndex = Math.floor(Math.random() * problems.length);
      const alreadyInArray = selectedQuestions.find((p) => p.id === problems[quesIndex].id);
      if (!alreadyInArray) {
        selectedQuestions.push(problems[quesIndex]);
      } else {
        i--;
      }
    }
    setQues(selectedQuestions);
  };

  useEffect(() => {
    setPrevQues(JSON.stringify(ques));
  }, [ques, setPrevQues]);

  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-8">
      <input type="number" onChange={handleInputChange} value={numOfQues} />
      <div className='bg-black rounded-2xl w-1/3'>
        {ques.map((question) => (
          <div key={question.id} className='text-white p-3 border-b border-b-gray-600'>
            <Link href={`/problem-setter/${question.id}`} className='hover:text-blue-500 hover:underline'>
              {question.statement}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
