// 1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
class StuGrades {
  constructor() {
    this.dataStore = [];
  }
  add(grade) {
    this.dataStore.push(grade);
  }
  average() {
    let total = this.dataStore.reduce((prev, next) => {
      return prev + next;
    })
    return total / this.dataStore.length;
  }
}
// 2. 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。
class WordStore {
  constructor(arr) {
    this.dataStore = arr;
  }
  sort() {
    return this.dataStore.slice().sort();
  }
  reverse() {
    return this.dataStore.slice().reverse();
  }
}
// 3. 修改本章前面出现过的weeklyTemps对象，使它可以使用一个二维数组来存储每月的有用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。
class MonthTemps {
  constructor() {
    this.dataStore = [
      [23, 43, 55],
      undefined,
      [34, 64, 32]
    ];
    this._addTotal = this._addTotal.bind(this);
  }
  add(week, temp) {
    this.dataStore[week - 1] = this.dataStore[week - 1] || [];
    this.dataStore[week - 1].push(temp);
  }
  showMonthAverage() {
    return this.dataStore.reduce(this._addTotal) / this._getLen();
  }
  showWeekAverage(week) {
    if(!Array.isArray(this.dataStore[week])) return;
    return this.dataStore[week].reduce(this._addTotal) / this.dataStore[week].length;
  }
  showAllWeekAverage() {
    this.dataStore.forEach((item, index) => {
      if(Array.isArray(item)) {
        console.log(index, '-->', this.showWeekAverage(index));
      }
    })
  }
  _addTotal(prev, next) {
    return (Array.isArray(prev) ? prev.reduce(this._addTotal) : prev ? prev : 0) + (Array.isArray(next) ? next.reduce(this._addTotal) : next ? next : 0)
  }
  _getLen() {
    let len = 0;
    this.dataStore.forEach((item) => {
      if(Array.isArray(item)) {
        len += item.length;
      }
    })
    return len;
  }
}
// 4. 创建这样一个对象，他将字母存储在一个数组中，并且用一个方法可以将字母连在一起，形成一个单词。
class Arr2Str {
  constructor() {
    this.dataStore = [];
  }
  add(letter) {
    this.dataStore.push(letter);
  }
  showWord() {
    return this.dataStore.join('');
  }
}
let test = new Arr2Str();
test.add('a')
test.add('b')
test.add('c')
test.add('d')
console.log(test.showWord())