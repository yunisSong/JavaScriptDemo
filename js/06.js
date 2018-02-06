function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

/*
函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。
因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。
如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined
 */ 


var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
/*
在这种方式下，function (x) { ... }是一个匿名函数，它没有函数名。
但是，这个匿名函数赋值给了变量abs，所以，通过变量abs就可以调用该函数。

//对输入参数进行校验 判断参数类型
 if (typeof x !== 'number') {
        throw 'Not a number';
    }

 */

 


// 利用arguments，你可以获得调用者传入的所有参数




var yunisAlert = function (x) {
  
   for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]);
    }

};

yunisAlert(100) //arg 0 = 100

yunisAlert(100,200,300)
/*
arg 0 = 100
arg 1 = 200
arg 2 = 300
 */ 


function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

/*

ES6标准引入了rest参数，上面的函数可以改写为

function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

rest参数只能写在最后，前面用...标识，
从运行结果可知，传入的参数先绑定a、b，
多余的参数以数组形式交给变量rest，
所以，不再需要arguments我们就获取了全部参数。


如果传入的参数连正常定义的参数都没填满，
也不要紧，rest参数会接收一个空数组（注意不是undefined）
 */

function sum(...rest) {
  console.log(rest)
  var result = 0;
  rest.forEach( function(element, index) {
  	result +=element;
  });
  return result;
}


var result = sum(1,2,3,4,5)

console.log(`result = ${result}`)


function area_of_circle(r, pi) {
	pi = pi || 3.14;
	var s = pi*r*r
	return s;
}
var s = area_of_circle(2)
console.log(`s = ${s}`)

var s1 = area_of_circle(2,3.1416)

console.log(`s1 = ${s1}`)



function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}

/*

虽然是strict模式，但语句var x = 'Hello, ' + y;
并不报错，原因是变量y在稍后申明了。但是console.log显示Hello, undefined，
说明变量y的值为undefined。
这正是因为JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。

由于JavaScript的这一怪异的“特性”，
我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则.
最常见的做法是用一个var申明函数内部用到的所有变量.

function foo() {
    var y; // 提升变量y的申明，此时y为undefined
    var x = 'Hello, ' + y;
    console.log(x);
    y = 'Bob';
}


function foo() {
    var
        x = 1, // x初始化为1
        y = x + 1, // y初始化为2
        z, i; // z和i为undefined
    // 其他语句:
    for (i=0; i<100; i++) {
        ...
    }
}

 */ 

foo();


