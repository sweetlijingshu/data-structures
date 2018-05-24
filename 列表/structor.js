class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }
  find(ele) {
    for (let i = 0, len = this.dataStore.length; i < len; i ++) {
      if (this.dataStore[i] === ele) {
        return i;
      }
    }
    return -1;
  }
  toString() {
    return this.dataStore.toString();
  }
  insert(ele, after) {
    let pos = this.find(after);
    if(pos > -1) {
      this.dataStore.splice(pos + 1, 0, ele);
      this.listSize ++;
      return true;
    }
    return false;
  }
  append(ele) {
    this.dataStore[this.listSize ++] = ele;
  }
  remove(ele) {
    let pos = this.find(ele);
    if (pos > -1) {
      this.dataStore.splice(pos, 1)
      this.listSize --;
      return true;
    }
    return false;
  }
  front() {
    this.pos = 0;
  }
  end() {
    this.pos = this.listSize - 1;
  }
  prev() {
    if(this.pos > 0) {
      this.pos --;
    }
  }
  next() {
    if(this.pos < this.listSize - 1) {
      this.pos ++;
    }
  }
  length() {
    return this.listSize;
  }
  currPos() {
    return this.pos;
  }
  moveTo(pos) {
    this.pos = pos;
  }
  getElement() {
    return this.dataStore[this.pos];
  }
  contains(ele) {
    return this.find(ele) > -1;
  }
}
module.exports = {
  List
}