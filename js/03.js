'use strict';
console.log(`多行
字符串
测试`);


// 字符串拼接

var name = "小明";

var age = 18;

var message = "你好，" + name +", 你今年" + age + "岁了！"

console.log(message);


var alerMessage = `你好，${name},你今年${age}岁了！`;
alert(alerMessage);


// 字符串操作

var length = "这是个测试长度的字符串"
console.log(length.length)

for (var i =  0; i < length.length; i++) 
{
	console.log(length[i])
}


// 字符串是不可变对象，如果修改字符串某个索引的值，不会有任何错误，但是也不会修改成功


/* 
	chrome是会在控制台报错的：
 	Uncaught TypeError: Cannot assign to read only property '0' of string
  		'这是个测试长度的字符串' 

length[0] = "？";
console.log(length)

  */


// toUpperCase 转为大写


var lowerString = "abcdefg";
console.log(lowerString.toUpperCase())

// toLowerCase 转为小写


var upperString = "ABCDEFG";
console.log(upperString.toLowerCase())


// indexOf 搜索指定字符串位置

var index = length.indexOf("这")
var unfindIndex = length.indexOf("不存在的字符串")
console.log(`index = ${index}`)
console.log(`unfindIndex = ${unfindIndex}`)//-1


// substring 返回区间之间的字符串


var substring = length.substring(0, 5);
var unfindsubstring = length.substring(100, 1000);
console.log(`substring = ${substring}`)
console.log(`unfindsubstring = '${unfindsubstring}'`)//不返回任何值
























