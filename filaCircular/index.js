function Queue() {
    var items = []

    this.enqueue = (element) => {
        items.push(element)
    }

    this.dequeue = () => {
        return items.shift()
    }

    this.first = () => {
        return items[0]
    }

    this.isEmpty = () => {
        return items.length === 0
    }

    this.size = () => {
        return items.length
    }

    this.print = () => {
        console.log(items)
    }
}

function hotPotato(nameList, num){
    var queue = new Queue()

    for(let i = 0; i < nameList.length; i++){//add os nomes no array
        queue.enqueue(nameList[i])
    }

    var eliminated = ''

    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())//ta passando o primeiro elem pro final e retornando ele, com base no num
        }
        eliminated = queue.dequeue()//retornndo o elemento na vari
        console.log(eliminated + " was eliminated from the Hot Potato Game")
    }
    return queue.dequeue()//elimina e retorna o unico elemento q sobrou no array
}

var names = ["Joao","Jose","Maria","Ana","Lucas"]
var winner = hotPotato(names , 7) //o retorno da funçao é atribuido aqui no winner
console.log("The winner is: " + winner)