'use strict';

// 闭包
// **有权访问另一个函数作用域内变量的函数都是闭包。**

function a(){
  var n = 0;
  this.inc = function () {
    n++; 
    console.log(n);
  };
}
var c = new a();

c.inc();  //1
c.inc();  //2



function a1(){
  var n = 0;
  function inc1(){
    n++; 
    console.log(n);
  }
  return inc1;
}
var c = a1();
c();  //控制台输出1
c();  //控制台输出2


function createFunctions(){

  var result = new Array();

  for (var i=0; i < 10; i++){
    result[i] = function(){
      return i;
    };
  }

  return result;
}
var funcs = createFunctions();
for (var j=0; j < funcs.length; j++){
  console.log(funcs[j]());//全部输出 10
}
/*

执行过程：

createFunctions :
for (var i=0; i < 10; i++){
    result[i] = function(){return i;};
	// 这个时候 方法并没用被调用   function 还是引用有 i
	i = 0 result[0] = function(){return i;};
	i = 1 result[1] = function(){return i;};
	i = 2 result[2] = function(){return i;};
	i = 3 result[3] = function(){return i;};
	i = 4 result[4] = function(){return i;};
	i = 5 result[5] = function(){return i;};
	i = 6 result[6] = function(){return i;};
	i = 7 result[7] = function(){return i;};
	i = 8 result[8] = function(){return i;};
	i = 9 result[9] = function(){return i;};
  }

 i = 10

for (var j=0; j < funcs.length; j++){
  console.log(funcs[j]());//全部输出 10
	
	此时 i = 10；
	i = 0 funcs[j]() -> function() -> return i;
	i = 1 funcs[j]() -> function() -> return i;
	i = 2 funcs[j]() -> function() -> return i;
	i = 3 funcs[j]() -> function() -> return i;
	i = 4 funcs[j]() -> function() -> return i;
	i = 5 funcs[j]() -> function() -> return i;
	i = 6 funcs[j]() -> function() -> return i;
	i = 7 funcs[j]() -> function() -> return i;
	i = 8 funcs[j]() -> function() -> return i;
	i = 9 funcs[j]() -> function() -> return i;


	所以返回的全部都是 10；
}
 */ 


// 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
// 如果一定要引用循环变量怎么办？
// 方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，
// 无论该循环变量后续如何更改，已绑定到函数参数的值不变：


/* function (x) { return x * x } (3);

	(function (x) {
	     return x * x;
	 })(3);

上面代码的意思是： 创建一个立即执行的匿名函数  function (x) ，并且立即执行，传入的参数为 3
*/


function count (){
	var arr = [];
	for (var i = 1; i < 4; i++) 
	{
		var func0 = (function(n) {
			return function(){return n * n}
		})(i)
		arr.push(func0)	

	}
	return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1();
f2();
f3();
console.log(`f1() = ${f1()}`)//1
console.log(`f2() = ${f2()}`)//4
console.log(`f3() = ${f3()}`)//9


// 闭包的左右：私有变量

function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            console.log(`x = ${x}`)
            return x;
        }
    }
}




var c1 = create_counter();
var c2 = create_counter(10);
c1.inc(); // 1
c1.inc(); // 2
c1.inc(); // 3


c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13


// 闭包还可以把多参数的函数变成单参数的函数。


function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);
/*
make_pow(2) -> function(x){return Math.pow(x, 2);} 
make_pow(3) -> function(x){return Math.pow(x, 3);} 
*/ 

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343


/*
make_pow(2) -> function(x){return Math.pow(x, 2);} 
make_pow(3) -> function(x){return Math.pow(x, 3);} 

pow2(5) -> function(5){return Math.pow(5, 2);} -> Math.pow(5, 2)
pow3(7) -> function(7){return Math.pow(7, 3);} -> Math.pow(7, 3)
*/ 





