"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MergeSort(arr) {
    var antes = performance.now();
    function merge(left, right) {
        var result = [];
        var leftIndex = 0;
        var rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }
    function sortArray(start, end) {
        if (end - start <= 1) {
            return arr.slice(start, end);
        }
        var middle = Math.floor((start + end) / 2);
        var left = sortArray(start, middle);
        var right = sortArray(middle, end);
        return merge(left, right);
    }
    var result = sortArray(0, arr.length);
    var duracao = performance.now() - antes;
    return {
        array: result,
        tempo: duracao
    };
}
exports.default = MergeSort;
