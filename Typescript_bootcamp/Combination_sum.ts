// this solution is my first naive approach and doesn't get through all test cases, simply it follows some the backtracking algo to avoid (O n*target)

// function combinationSum(candidates: number[], target: number): number[][]
// {
//     let sum: number[][] = [];
//     // let remainder: number;
//     let tmp : number[] = [];

//     for (let i = 0; i < candidates.length; i++)
//     {
//         let index = candidates.length -1 - i;
//         let remainder = target;
//         tmp = [];
//         while (remainder)
//         {
//             remainder -= candidates[index];
//             if (remainder === 0)
//             {
//                 tmp.push(candidates[index]);
//                 // sum.push(tmp);
//                 if (!sum.some(arr => arr.length === tmp.length && arr.every((num, i) => num === tmp[i])))
//                     sum.push(tmp);
//                 break;
//             }
//             else if (remainder > 0)
//             {
//                 tmp.push(candidates[index]);
//             }
//             else if (remainder < 0 || remainder < candidates[0])
//             {
//                 let v = tmp.pop();
//                 remainder += v === undefined ? 0: v + candidates[index];
//             }

//             if (remainder < candidates[index])
//             {
//                 index--;
//             }
//             else if (candidates[index] === undefined && remainder !== 0)
//             {
//                 tmp = [];
//                 break;
//             }
//         }
//     }
//     return sum;
// }


// this is the final implementation of the backtracking solution, worst case can be up to O(2*N) since it's exponential

function combinationSum(candidates: number[], target: number): number[][] {
    let result: number[][] = [];

    function backtrack(start: number, target: number, currentCombination: number[]): void {
        if (target === 0) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                currentCombination.push(candidates[i]);
                backtrack(i, target - candidates[i], currentCombination);
                currentCombination.pop();
            }
        }
    }

    backtrack(0, target, []);
    return result;
}