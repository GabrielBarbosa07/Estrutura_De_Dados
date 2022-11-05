function converter(decNumber, base){
    let restStack = [],
    rest, 
    binaryToString = "",
    digits = "0123456789ABCDEF"

    while(decNumber > 0){
        rest = Math.floor(decNumber % base)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / base)
    }

    while(restStack.length > 0){
        binaryToString += digits[restStack.pop()]
    }

    return binaryToString

}

console.log(converter(100, 7))

