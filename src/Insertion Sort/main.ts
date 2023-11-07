function InsertionSort(arr:string[]){
    const antes = performance.now()

    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i;
  
      while (j > 0 && Number(arr[j - 1]) > Number(current)) {
        arr[j] = arr[j - 1];
        j--;
      }
  
      arr[j] = current;
    }
    
    const duracao = performance.now() - antes

    return {
        array: arr,
        tempo: duracao
    }
}
  
export default InsertionSort