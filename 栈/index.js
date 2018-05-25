const Stack = require('./structor').Stack;

// 例题1：数值间相互转换（针对基数小于十）
function mulBase(num, base) {
  let stack = new Stack();
  while(num) {
    stack.push(num % base);
    num = Math.floor(num / base);
  }
  let result = '';
  while(stack.length() > 0) {
    result += stack.pop();
  }
  return +result;
}

// 例题2：判断回文
// 回文是正序逆序相等的字符串
function isPalindrom(word) {
  let stack = new Stack();
  for(let i = 0, len = word.length; i < len; i ++) {
    stack.push(word[i]);
  }
  let str = '';
  while(stack.length() > 0) {
    str += stack.pop();
  }
  return str == word;
}
// #方法2：
function isPalindrom(word) {
  return word == word.split('').reverse().join('');
}

// 例题3：递归
function fact(n) {
  let stack = new Stack();
  while(n > 1) {
    stack.push(n --);
  }
  let result = 1;
  while(stack.length() > 0) {
    result *= stack.pop();
  }
  return result;
}

// 习题1. 栈可以用来判断一个算术表达式中的括号是否匹配。 编写一个函数， 该函数接受一个算术表达式作为参数， 返回括号缺失的位置。 下面是一个括号不匹配的算术表达式的例子： 2.3 + 23 / 12 + (3.14159× 0.24。
function checkExpression(str) {
  let stack = new Stack(),
      strArr = str.split('');
  strArr.forEach((item, index) => {
    if(['{', '[', '('].indexOf(item) > -1) {
      stack.push(item)
    }
    if(['}', ']', ')'].indexOf(item) > -1) {
      if(item != stack.pop()) {
        return `missing at ${index + 1}`
      }
    }
  })
  if(stack.length() == 1) {
    return `missing at ${str.length + 1}`
  } else {
    return `match`
  }
}

// 习题2： 一个算术表达式的后缀表达式形式如下：
// op1 op2 operator
// 使用两个栈， 一个用来存储操作数， 另外一个用来存储操作符， 设计并实现一个JavaScript 函
// 数， 该函数可以将中缀表达式转换为后缀表达式， 然后利用栈对该表达式求值。
// 只支持简单整数运算，不识别{} []  这道题意思可能是转换成后缀表达式时用栈存操作符，求值时一个栈存操作数，总共连个栈。。。
// 转换规则：
// 1. 遇到操作数： 直接输出（ 添加到后缀表达式中）
// 2. 栈为空时， 遇到运算符， 直接入栈
// 3. 遇到左括号： 将其入栈
// 4. 遇到右括号： 执行出栈操作， 并将出栈的元素输出， 直到弹出栈的是左括号， 左括号不输出。
// 5. 遇到其他运算符： 加减乘除： 弹出所有优先级大于或者等于该运算符的栈顶元素， 然后将该运算符入栈
// 6. 最终将栈中的元素依次出栈， 输出。
function disExpression(expre) {
  let operators = new Stack(),
      expreStr = []
      expreArr = expre.split('');
  expreArr.forEach((item) => {
    switch(true) {
      case parseInt(item) >= 0: 
        expreStr.push(item);
        break;
      case operators.length() == 0 || item == '(' || operators.peek() == '(':
        operators.push(item);
        break;
      case item == ')':
        while(operators.peek() != '(') {
          expreStr.push(operators.pop())
        }
        operators.pop();
        break;
      case item == '+':
      case item == '-':
        while (operators.peek() != '(' && operators.length() > 0) {
          expreStr.push(operators.pop());
        }
        operators.push(item);
        break;
      case item == '*':
      case item == '/':
        if (['+', '-'].indexOf(operators.peek()) > -1) {
          operators.push(item);
        } else {
          while (['+', '-'].indexOf(operators.peek()) == -1) {
            expreStr.push(operators.pop())
          }
          operators.push(item);
        }
        break;
    }
  })
  while(operators.length() > 0) {
    expreStr.push(operators.pop())
  }
  return expreStr.join(' ');
}

// 对后缀表达式求值就比较简单了，后缀表达式遇到操作符就弹出两个操作数计算
function getResult(expre) {
  let options = new Stack(),
      expreArr = expre.split(' ');
  expreArr.forEach((item) => {
    if(isNaN(item)) {
      let next = options.pop(),
          prev = options.pop();
      let temp = eval(`${prev + item + next}`)
      options.push(temp)
    } else {
      options.push(item);
    }
  })
  return options.pop()
}
// console.log(disExpression(`9+(3-1)*3+6/2-4`))
// console.log(getResult(disExpression(`9+(3-1)*3+6/2-4`)))

// 例题3： 现实生活中栈的一个例子是佩兹糖果盒。 想象一下你有一盒佩兹糖果， 里面塞满了红
// 色、 黄色和白色的糖果， 但是你不喜欢黄色的糖果。 使用栈（ 有可能用到多个栈） 写一
// 段程序， 在不改变盒内其他糖果叠放顺序的基础上， 将黄色糖果移出。
// 0: 红色 1：黄色 2：白色
function getCandy(arr) {
  let otherCandy = new Stack(),
      candyBox = new Stack(),
      result = [];
  arr.forEach((item) => {
    if(item != 1) {
      otherCandy.push(item);
    }
  })
  while(otherCandy.length() > 0) {
    candyBox.push(otherCandy.pop())
  }
  while(candyBox.length() > 0) {
    result.push(candyBox.pop())
  }
  return result;
}