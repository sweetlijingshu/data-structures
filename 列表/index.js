const List = require('./structor').List

// 1. 增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执
// 行插入操作。这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母，它
// 是指在字母表中出现的先后顺序。
List.prototype.insertIfGt = function (ele, after) {
  let condition = this.dataStore.every((item) => {
    return typeof ele == 'string' ? ele.toLowerCase() > item.toLowerCase() : ele > item;
  })
  if (condition) {
    return this.insert(ele, after)
  }
  return false
}

// 2. 增加一个像列表中插入元素的方法，该方法只在待插入元素小于列表中的所有元素时才执行插入操作。
List.prototype.insertIfLt = function (ele, after) {
  let condition = this.dataStore.every((item) => {
    return typeof ele == 'string' ? ele.toLowerCase() < item.toLowerCase() : ele < item;
  })
  if (condition) {
    return this.insert(ele, after)
  }
  return false
}

// 3. 创建Person类，该类用于保存人的姓名和性别信息。创建一个至少包含10个Person对象的列表。写一个函数显示列表中所有拥有相同性别的人。
class Person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}
List.prototype.showSameSex = function () {
  let male = []
  female = [];
  this.dataStore.forEach((item) => {
    item.sex === 'male' ? male.push(item) : female.push(item);
  })
  console.log('male:')
  male.forEach((item) => {
    console.log(item.name, item.sex)
  })
  console.log('female:')
  female.forEach((item) => {
    console.log(item.name, item.sex)
  })
}
let personList = new List();
// 测试程序时打开
if (0) {
  for (let i = 0; i < 20; i++) {
    personList.append(new Person(`name${i}`, (() => {
      return Math.random() > 0.5 ? 'male' : 'female';
    })()))
  }
}

// 4. 修改影碟租赁程序，当一部影片检出后，将其加入一个已租影片列表。每当有客户检出一部影片，都显示该列表中内容。
let movieList = new List();
let customers = new List();
let lendedList = new List();
class Customer {
  constructor(name, movie) {
    this.name = name;
    this.movie = movie;
  }
}

function checkOut(name, movie, filmList, customerList) {
  if (filmList.contains(movie)) {
    let c = new Customer(name, movie);
    customerList.append(c);
    lendedList.append(movie);
    filmList.remove(movie);
    console.log(lendedList.toString());
  } else {
    console.log(`${movie} is not available`)
  }
}
// 5. 为影碟租赁程序创建一个check-in函数，每当用户归还一部影片时，将该影片从已租列表中删除，同时添加到现有影片列表。
function checkIn(movie, filmList, lendedList) {
  if(lendedList.contains(movie)) {
    filmList.append(movie);
    filmList.append(movie);
  }
}