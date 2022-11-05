function linkedList() {
    var Node = function (element) {
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = (element) => {
        var node = new Node(element)
        var current

        if (head === null) {
            head = node
        } else {
            current = head//node1

            while (current.next) {//!null, caso seja null ele desce. Caso true, current recebe o novo obj q veio de node, ao inves do head q está com o primeiro obj
                current = current.next
            }

            current.next = node //É instanciado o node no current.next. E volta pro while
        }
        length++
    }

    this.insert = (position, element) => {

    }

    this.removeAt = (position) => {
        if (position > - 1 && position < length){
            var current = head
            var previous
            var index = 0

            if(position === 0){
                head = current.next
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element

        }else{
            return null
        }
    }

    this.remove = (element) => {

    }

    this.indexOf = (element) => {

    }

    this.isEmpty = () => {

    }

    this.size = () => {

    }

    this.toString = () => {
        var current = head
        var string = ""

        while (current) {
            string += current.element + " "
            current = current.next
        }
        return string
    }

    this.print = () => {
        console.log(this.toString())
    }
}

var ll = new linkedList()
ll.append("Joao")
ll.append("Jose")
ll.append("Maria")
ll.print()