'use strict';

var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);


let [x1, [y1, z1]] = ['hello', ['JavaScript', 'ES6']];
console.log('x1 = ' + x1 + ', y1 = ' + y1 + ', z1 = ' + z1);


let [, , z2] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
console.log(' z = ' + z2);

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);
var {name, age, passport,xyz} = person;
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport+',xyz =' +xyz);


let {name, passport:id} = person;
name; // '小明'
id; // 'G-12345678'
// 注意: passport不是变量，而是为了让变量id获得passport属性:
passport; // Uncaught ReferenceError: passport is not defined


// 如果person对象没有single属性，默认赋值为true:
var {name, single=true} = person;
name; // '小明'
single; // true


// 使用场景
// ，交换两个变量x和y的值，可以这么写，不再需要临时变量：

var x=1, y=2;
[x, y] = [y, x]


// 快速获取当前页面的域名和路径：
var {hostname:domain, pathname:path} = location;





