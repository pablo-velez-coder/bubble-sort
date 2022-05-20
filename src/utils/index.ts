export function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function bubbleSortRecursive(input:number[],curr: number = 0, steps: number[][]=[]):Promise<number[]>{
    if(curr===input.length)return input;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > input[i + 1]) {
        [input[i],input[i + 1]] = [input[i + 1],input[i]]  
      }
    }
    steps.push([...input])

    return bubbleSortRecursive(input,curr+1, steps);
   }
