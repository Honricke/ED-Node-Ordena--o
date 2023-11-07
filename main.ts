import * as fs from 'fs'
import toNumber from './src/toNumber/toNumber'
import SelectionSort from './src/Selection Sort/main'
import InsertionSort from './src/Insertion Sort/main'
import MergeSort from './src/Merge Sort/main'

const numbers = fs.readFileSync('./db/num.1000.1.in','utf-8')
const arrayToSort = toNumber(numbers.split("\n"))

const dadosS = SelectionSort(arrayToSort)
console.log(`Selection Sort:\nOrdenação: ${dadosS.array}\nLevou: ${dadosS.tempo.toFixed(4)} ms`)

console.log("\n\n=============================================================\n\n")

const dadosI = InsertionSort(arrayToSort)
console.log(`Insertion Sort:\nOrdenação: ${dadosI.array}\nLevou: ${dadosI.tempo.toFixed(4)} ms`)

console.log("\n\n=============================================================\n\n")

const dadosM = MergeSort(arrayToSort)
console.log(`Merge Sort:\nOrdenação: ${dadosM.array}\nLevou: ${dadosM.tempo.toFixed(4)} ms`)
