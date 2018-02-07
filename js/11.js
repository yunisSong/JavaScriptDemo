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
