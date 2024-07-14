type Problem = {
    id: string;
    statement: string;
    description: string;
    input: string;
    output: string;
}

export const problems: Problem[] = [
    {
        id: "1",
        statement: "Find sum",
        description: "Given multiple pairs of integers, find the sum of each pair.",
        input: "3\n2 3\n4 5\n6 9\n",
        output: "5\n9\n15\n",
    },
    {
        id: "2",
        statement: "Find diff",
        description: "Given multiple pairs of integers, find the difference between each pair.",
        input: "3\n3 2\n7 5\n13 9\n",
        output: "1\n2\n4\n",
    },
    {
        id: "3",
        statement: "Find product",
        description: "Given multiple pairs of integers, find the product of each pair.",
        input: "3\n3 2\n7 5\n13 9\n",
        output: "6\n35\n117\n",
    },
    {
        id: "4",
        statement: "Find quotient",
        description: "Given multiple pairs of integers, find the quotient of each pair when the first integer is divided by the second integer.",
        input: "3\n6 2\n10 5\n14 7\n",
        output: "3\n2\n2\n",
    },
    {
        id: "5",
        statement: "Find remainder",
        description: "Given multiple pairs of integers, find the remainder when the first integer is divided by the second integer.",
        input: "3\n7 2\n10 3\n14 5\n",
        output: "1\n1\n4\n",
    },
    {
        id: "6",
        statement: "Find max",
        description: "Given multiple pairs of integers, find the maximum value in each pair.",
        input: "3\n2 3\n4 5\n6 9\n",
        output: "3\n5\n9\n",
    },
    {
        id: "7",
        statement: "Find min",
        description: "Given multiple pairs of integers, find the minimum value in each pair.",
        input: "3\n2 3\n4 5\n6 9\n",
        output: "2\n4\n6\n",
    },
    {
        id: "8",
        statement: "Find sum of squares",
        description: "Given multiple pairs of integers, find the sum of the squares of each pair.",
        input: "3\n2 3\n4 5\n6 9\n",
        output: "13\n41\n117\n",
    },
    {
        id: "9",
        statement: "Find sum of cubes",
        description: "Given multiple pairs of integers, find the sum of the cubes of each pair.",
        input: "3\n2 3\n4 5\n6 9\n",
        output: "35\n189\n945\n",
    },
    {
        id: "10",
        statement: "Find absolute difference",
        description: "Given multiple pairs of integers, find the absolute difference between each pair.",
        input: "3\n2 3\n4 5\n6 9\n",
        output: "1\n1\n3\n",
    }
];
