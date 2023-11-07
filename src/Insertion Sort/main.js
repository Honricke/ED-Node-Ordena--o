"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function InsertionSort(arr) {
    var antes = performance.now();
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        var j = i;
        while (j > 0 && Number(arr[j - 1]) > Number(current)) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    var duracao = performance.now() - antes;
    return {
        array: arr,
        tempo: duracao
    };
}
exports.default = InsertionSort;
