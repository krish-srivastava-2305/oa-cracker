type problem = {
    id: string,
    statement: string,
    description: string,
    input: string,
    output: string,
}

export const problems: Array<problem> = [
    {
        id: "1",
        statement: "Two Sum",
        description: "Given an array of integers and a target integer, return indices of the two numbers such that they add up to the target.",
        input: "3\n4\n2 7 11 15\n9\n3\n3 2 4\n6\n5\n1 2 3 4 5\n9\n",
        output: "0 1\n1 2\n3 4\n",
    },
    {
        id: "2",
        statement: "Three Sum",
        description: "Given an array of integers, return all the triplets that add up to zero.",
        input: "2\n6\n-1 0 1 2 -1 -4\n5\n0 0 0 0 0\n",
        output: "[-1, 0, 1], [-1, -1, 2]\n[0, 0, 0]\n",
    },
    {
        id: "3",
        statement: "Binary Search",
        description: "Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
        input: "5\n4\n1 3 5 6\n5\n1 3 5 6\n2\n1 3 5 6\n7\n1 3 5 6\n0\n1 3 5 6\n",
        output: "2\n-1\n-1\n4\n0\n",
    },
    {
        id: "4",
        statement: "Maximum Subarray",
        description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        input: "2\n9\n-2 1 -3 4 -1 2 1 -5 4\n1\n1\n",
        output: "6\n1\n",
    },
    {
        id: "5",
        statement: "Product of Array Except Self",
        description: "Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].",
        input: "2\n4\n1 2 3 4\n4\n2 3 4 5\n",
        output: "24 12 8 6\n60 40 30 24\n",
    },
    {
        id: "6",
        statement: "Search in Rotated Sorted Array",
        description: "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. You are given a target value to search. If found in the array return its index, otherwise return -1.",
        input: "2\n7\n4 5 6 7 0 1 2\n0\n7\n4 5 6 7 0 1 2\n3\n",
        output: "4\n-1\n",
    },
    {
        id: "7",
        statement: "Longest Increasing Subsequence",
        description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        input: "2\n8\n10 9 2 5 3 7 101 18\n6\n0 1 0 3 2 3\n",
        output: "4\n4\n",
    },
    {
        id: "8",
        statement: "Coin Change",
        description: "Given a set of coin denominations and an amount, determine the minimum number of coins needed to make up that amount.",
        input: "2\n3\n1 2 5\n11\n4\n1 2 5 10\n27\n",
        output: "3\n4\n",
    },
    {
        id: "9",
        statement: "Longest Common Subsequence",
        description: "Given two strings, find the length of their longest common subsequence.",
        input: "2\nabcde\nace\nabcd\ndefg\n",
        output: "3\n1\n",
    },
    {
        id: "10",
        statement: "Word Break",
        description: "Given a string and a dictionary of words, determine if the string can be segmented into a space-separated sequence of one or more dictionary words.",
        input: "2\nleetcode\nleet code\napplepenapple\napple pen\n",
        output: "true\ntrue\n",
    },
    {
        id: "11",
        statement: "Longest Palindromic Subsequence",
        description: "Given a string, find the length of its longest palindromic subsequence.",
        input: "2\nbbbab\ncbbd\n",
        output: "4\n2\n",
    },
    {
        id: "12",
        statement: "Unique Paths",
        description: "Given a m x n grid, find how many unique paths are there from the top-left corner to the bottom-right corner.",
        input: "2\n3 2\n7 3\n",
        output: "3\n28\n",
    },
    {
        id: "13",
        statement: "Minimum Path Sum",
        description: "Given a m x n grid filled with non-negative numbers, find a path from top-left to bottom-right which minimizes the sum of all numbers along its path.",
        input: "2\n3 3\n1 3 1\n1 5 1\n4 2 1\n2 3\n1 2 3\n",
        output: "7\n6\n",
    },
    {
        id: "14",
        statement: "Edit Distance",
        description: "Given two strings, find the minimum number of operations required to convert one string to the other.",
        input: "2\nhorse\nros\nintention\nexecution\n",
        output: "3\n5\n",
    },
    {
        id: "15",
        statement: "House Robber",
        description: "Given an integer array representing the amount of money in each house, determine the maximum amount of money you can rob tonight without alerting the police.",
        input: "2\n4\n1 2 3 1\n5\n2 7 9 3 1\n",
        output: "4\n12\n",
    },
    {
        id: "16",
        statement: "Climbing Stairs",
        description: "Given a number of stairs, determine how many distinct ways you can climb to the top.",
        input: "2\n2\n3\n",
        output: "2\n3\n",
    },
    {
        id: "17",
        statement: "Number of Islands",
        description: "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.",
        input: "2\n4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0\n4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1\n",
        output: "1\n3\n",
    },
    {
        id: "18",
        statement: "Maximum Depth of Binary Tree",
        description: "Given a binary tree, find its maximum depth.",
        input: "2\n3\n3 9 20 null null 15 7\n2\n1 null 2\n",
        output: "3\n2\n",
    },
    {
        id: "19",
        statement: "Balanced Binary Tree",
        description: "Given a binary tree, determine if it is height-balanced.",
        input: "2\n3\n3 9 20 null null 15 7\n2\n1 2 2 3 null null 3 4 null null 4\n",
        output: "true\nfalse\n",
    },
    {
        id: "20",
        statement: "Lowest Common Ancestor of a Binary Tree",
        description: "Given a binary tree, find the lowest common ancestor of two given nodes.",
        input: "2\n3\n3 5 1 6 2 0 8 null null 7 4\n5 1\n3\n3 5 1 6 2 0 8 null null 7 4\n5 4\n",
        output: "3\n5\n",
    },
    {
        id: "21",
        statement: "Course Schedule",
        description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites. Determine if you can finish all courses.",
        input: "2\n2\n1 0\n4\n0 1\n1 2\n2 3\n3 1\n",
        output: "true\nfalse\n",
    },
    {
        id: "22",
        statement: "Implement Trie (Prefix Tree)",
        description: "Implement a trie with insert, search, and startsWith methods.",
        input: "1\ninsert apple\nsearch apple\nsearch app\nstartsWith app\ninsert app\nsearch app\n",
        output: "true\nfalse\ntrue\ntrue\n",
    },
    {
        id: "23",
        statement: "Merge Intervals",
        description: "Given a collection of intervals, merge all overlapping intervals.",
        input: "2\n4\n1 3\n2 6\n8 10\n15 18\n3\n1 4\n4 5\n",
        output: "[1, 6], [8, 10], [15, 18]\n[1, 5]\n",
    },
    {
        id: "24",
        statement: "Subsets",
        description: "Given a set of distinct integers, return all possible subsets (the power set).",
        input: "2\n3\n1 2 3\n1\n0\n",
        output: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]\n[[], [0]]\n",
    },
    {
        id: "25",
        statement: "Combination Sum",
        description: "Given an array of distinct integers and a target integer, return all unique combinations in the array where the chosen numbers sum to the target.",
        input: "2\n4\n2 3 6 7\n7\n3\n2 3 5\n8\n",
        output: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]\n",
    },
    {
        id: "26",
        statement: "Word Search",
        description: "Given a 2D board and a word, find if the word exists in the grid.",
        input: "2\n3 4\nA B C E\nS F C S\nA D E E\n3\nA B C C\n3 4\nA B C E\nS F C S\nA D E E\n4\nA B C B\n",
        output: "true\nfalse\n",
    },
    {
        id: "27",
        statement: "Implement Queue using Stacks",
        description: "Implement a queue using stacks with push, pop, and peek operations.",
        input: "1\npush 1\npush 2\npeek\npop\nempty\n",
        output: "2\n1\nfalse\n",
    }
];
