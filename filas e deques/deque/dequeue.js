class Dequeue {
  constructor() {
    this.itemToRemoveFrontKey = 0;
    this.itemToAddBackKey = 0;
    this.items = {};
  }

  //Back é no Ultimo indice
  addBack(element) {
    this.items[this.itemToAddBackKey] = element;
    this.itemToAddBackKey++;
  }
  removeFromBack() {
    const itemToRemove = this.items[this.itemToAddBackKey - 1];
    delete this.items[this.itemToAddBackKey - 1];
    this.itemToAddBackKey--;
    return itemToRemove;
  }
  peekBack() {
    return this.items[this.itemToAddBackKey - 1];
  }

  //Front é no Primeiro indice
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.itemToRemoveFrontKey > 0) {
      this.itemToRemoveFrontKey--;
      this.items[this.itemToRemoveFrontKey] = element;
    } else {
      for (let i = this.itemToAddBackKey; i >= 1; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.itemToAddBackKey++;
      this.items[0] = element;
    }
  }

  removeFromFront() {
    const itemToRemove = this.items[this.itemToRemoveFrontKey];
    delete this.items[this.itemToRemoveFrontKey];
    this.itemToRemoveFrontKey++;
    return itemToRemove;
  }
  peekFront() {
    return this.items[this.itemToRemoveFrontKey];
  }

  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.itemToAddBackKey - this.itemToRemoveFrontKey;
  }

  clear() {
    this.itemToRemoveFrontKey = 0;
    this.itemToAddBackKey = 0;
    this.items = {};
  }
}
