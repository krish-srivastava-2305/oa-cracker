'use client';
import React, { useState } from 'react';
import { problems } from '@/problems/problemData';
import Link from 'next/link';

type ProblemObject = {
  id: string;
  statement: string;
  input: string;
  output: string;
};

function Page() {
  const [ques, setQues] = useState<Array<ProblemObject>>([]);
  const [numOfQues, setNumOfQues] = useState<number>(0);
    const id = 1;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNumOfQues(value);

    const selectedQuestions: ProblemObject[] = [];
    for (let i = 0; i < value; i++) {
      const quesIndex = Math.floor(Math.random() * problems.length);
      selectedQuestions.push(problems[quesIndex]);
    }
    setQues(selectedQuestions);
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <input type="number" onChange={handleInputChange} value={numOfQues} />
      <div>
        {ques.map((question) => (
          <div key={question.id}>
            <Link href={`/problem-setter/${question.id}`}>{question.statement}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
