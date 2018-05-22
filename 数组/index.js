// 1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
class StuGrades {
  constructor() {
    this.dataStore = [];
  }
  add(grade) {
    this.dataStore.push(grade);
  }
  average() {
    let total = this.dataStore.reduce((a, b) => {
      return a + b;
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
