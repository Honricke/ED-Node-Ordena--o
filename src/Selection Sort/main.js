"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SelectionSort(arr) {
    var antes = performance.now();
    var array = arr;
    var N = array.length;
    for (var i = 0; i < N - 1; i++) {
        var min = i;
        for (var j = i + 1; j < N; j++) {
            if (Number(array[j]) < Number(array[min])) {
                min = j;
            }
        }
        var temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    var duracao = performance.now() - antes;
    return {
        "array": arr,
        "tempo": duracao
    };
}
exports.default = SelectionSort;
