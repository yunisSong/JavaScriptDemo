'use strict';

var array = [1,2,"string",1.23,true,null];

console.log('array.length = '+ array.length);

// 给 数组 赋值新的长度 会导致数组的变化
// 如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：


array.length = 2;
console.log('2 length array = '+ array);//1,2

array.length = 6;
console.log('6 length array = '+ array);//1,2,,,,, 有些显示的是 undefined chrome 浏览器打印出来的是空值

// indexOf 去的特定元素的索引值
var index = array.indexOf(1);
var unfindIndex = array.indexOf("string");
console.log(`index is ${index}`)//0
console.log(`unfindIndex is ${unfindIndex}`)//-1



// slice  截取Array的部分元素，然后返回一个新的Array
// slice()的起止参数包括开始索引，不包括结束索引。
// 如果不给slice()传递任何参数，它就会从头到尾截取所有元素.
// 超出数组的索引，会返回空值（chrome） 其他浏览器也有可能返回 undefined？？？


var newArray = [1,2,3,4,5,6,7].slice(0, 2);
console.log(`newArray is ${newArray}`)//1,2



var undifindeArray = [1,2,3,4,5,6,7].slice(100, 200);

console.log(`undifindeArray is ${undifindeArray}`)//空

// push和pop
// push()向Array的末尾添加若干元素 返回值是新数组的长度
// pop()则把Array的最后一个元素删除掉 返回值是移除的item，空数组返回 undefined


var array = [1,2,3,4,5];


var length= array.push("A","B");
console.log(`length is ${length}`)
console.log(`array is ${array}`)//1,2,3,4,5,A,B

var popItem= array.pop()
console.log(`popItem is ${popItem}`)//B
console.log(`array is ${array}`)//1,2,3,4,5,A


// unshift和shift
// 如果要往Array的头部添加若干元素，使用unshift()方法  返回值是新数组的长度
// shift()方法则把Array的第一个元素删掉 返回值是移除的item，空数组返回 undefined


var length= array.unshift("D");
console.log(`length is ${length}`)
console.log(`array is ${array}`)//D,1,2,3,4,5,A

var shiftItem= array.shift()
console.log(`shiftItem is ${shiftItem}`)//D
console.log(`array is ${array}`)//1,2,3,4,5,A

// sort 排序 可以指定方法排序。。。
var array = ["B","C","A"];
array.sort()
console.log(`array is ${array}`)

// reverse 翻转数组 头尾换位置
var array = ["B","C","A"];
array.reverse()
console.log(`array is ${array}`)

// splice 修改数组的万能方法，可以冲指定索引位置开始删除若干元素，然后再从该位置添加若干元素
var array = ["B","C","A"];
// array.splice(start: int, deleteCount: int, items...: any)

// 从索引 0 开始删除，删除一个元素，然后添加 元素F 元素 G
array.splice(0, 1, "F","G");
console.log(`array is ${array}`)//F,G,C,A
// 从索引 0 开始删除，删除一个元素，不添加元素
array.splice(0, 1);
console.log(`array is ${array}`)//G,C,A

// 从索引 0 开始删除，删除0个元素，然后添加 元素J 元素 K
array.splice(0, 0,"J","K");
console.log(`array is ${array}`)//J,K,G,C,A


// concat 拼接数组 返回一个新的数组
var array1 = ["a","b"];
var array2 = ["A","B"]

var newArray = array1.concat(array2)
console.log(`newArray is ${newArray}`)


// join 把数组中的每个元素使用指定的字符串拼接起来，返回连接后的字符串

var array = [1,2,3,4,5,6,7];
var joinStr = array.join("-");
console.log(`joinStr is ${joinStr}`)//1-2-3-4-5-6-7














