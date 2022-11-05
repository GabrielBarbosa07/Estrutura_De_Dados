function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = (element, priority) => {
    let queueElement = new QueueElement(element, priority);
    let added = false;

    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement);
    }
  };

  this.dequeue = () => {
    return items.shift();
  };

  this.print = () => {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].element + " " + items[i].priority);
    }
  };
}

let pqueue = new PriorityQueue();
pqueue.enqueue("Carlos", 2);
pqueue.enqueue("Joao", 3);
pqueue.enqueue("Ana", 1);
pqueue.enqueue("Maria", 1);

pqueue.print();
