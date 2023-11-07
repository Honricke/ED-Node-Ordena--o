function MergeSort(arr: number[]) {
    const antes = performance.now()

    function merge(left: number[], right: number[]): number[] {
      let result: number[] = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }
  
    function sortArray(start: number, end: number): number[] {
      if (end - start <= 1) {
        return arr.slice(start, end);
      }
  
      const middle = Math.floor((start + end) / 2);
      const left = sortArray(start, middle);
      const right = sortArray(middle, end);
  
      return merge(left, right);
    }

    const result = sortArray(0, arr.length);

    const duracao = performance.now() - antes
    
    return {
        array: result,
        tempo: duracao
    } 
  }

export default MergeSort;