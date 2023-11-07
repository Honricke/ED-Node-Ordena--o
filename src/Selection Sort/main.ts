
function SelectionSort(arr:string[]) {
    const antes = performance.now()

    const array:string[] = arr;
    const N = array.length;
  
    for (let i = 0; i < N - 1; i++) {
        let min = i;
  
        for (let j = i + 1; j < N; j++) {
            if (Number(array[j]) < Number(array[min])) {
                min = j;
            }
        }

        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }

    const duracao = performance.now() - antes

    return {
        "array": arr,
        "tempo": duracao
    }
}

export default SelectionSort;