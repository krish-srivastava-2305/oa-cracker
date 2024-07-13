import { problems } from "@/problems/problemData";

type problem = {
    id: string,
    statement : string,
    input: string,
    output: string,
}

function seachingProblem(problems: Array<problem>, problemId: number): problem{
    let left: number = 0, right: number = problems.length - 1
    while(left <= right){
        let mid: number = Math.floor(left + (right - left) / 2);
        if(parseInt(problems[mid]?.id) === problemId) return problems[mid];
        if(parseInt(problems[mid]?.id) > problemId) right = mid - 1
        else left = mid + 1;
    } 
    return {
        id: "0",
        statement: "not found",
        input: "not found",
        output: "not found"
    }
}

export function problemFinder (problemId: number) : Array<string> {
    const {id, statement, input, output} = seachingProblem(problems, problemId)
    return [id, statement, input, output] 
}