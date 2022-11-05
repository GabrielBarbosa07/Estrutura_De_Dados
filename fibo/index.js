function fibo(){
    let arr = []
    arr[0] = 0
    arr[1] = 1
    arr[2] = 1

    for(let i = 3; i < 20; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    return arr
}
console.log(fibo())

