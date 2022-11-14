let names = ['Ana', 'ana', 'john', 'John'];

function compareStrings(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1
    }
    if (a.toLowerCase() > b.toLowerCase()){
        return 1
    }
    return 0
}
console.log(names.sort((a,b) => a.localeCompare(b)))
console.log(names.sort(compareStrings))
