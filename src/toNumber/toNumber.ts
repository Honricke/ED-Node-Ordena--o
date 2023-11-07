function toNumber(array:string[]){
    const newArray = []
    for(const i in array){
        //@ts-ignore
        newArray.push(Number(i))
    }
    return newArray
}

export default toNumber;