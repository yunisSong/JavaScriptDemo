
'use strict';

function add(x, y, f) {
    return f(x) + f(y);
}

function yunisFunction(item) {
	item = item || 0;
	return item + 10;
}

var r = add(5,6,yunisFunction)
console.log(`r = ${r}`)//31
var r1 = add(5,"yuis",yunisFunction)
console.log(`r1 = ${r1}`)//15yuis10




function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

var results1 = arr.map(function(item) {
	console.log(`item = ${item}`)
	return item * item;
})
console.log(results1);//[1, 4, 9, 16, 25, 36, 49, 64, 81]



// reduce


var results2 = arr.reduce(function(x,y){
	return x + y;
})

console.log(`results2 = ${results2}`)//45


var results3 = [1,2,3,4].reduce(function(x,y){
	return x * y;
})
console.log(`results3 = ${results3}`)//45



function string2int(s) {
	// s -> array
	var array = [];
	for (var i = 0; i < s.length ; i++) {
		var item = s[i];
		array.push(item);
	}


	console.log(`array = ${array}`)
 	var s2num = arr.map(function(x) { 
    	return x - 0; 
    }) 

	// array -> num
	
 	var r = s2num.reduce(function(x,y){
 		var t = x*10 + y;
 		console.log(`t = ${t}`)

		return t;
	})

	return r;

}

var r = string2int("123456")
console.log(`r = ${r}`)


function normalize(arr) {

	var t = arr.map(function(item) 
	{
		var hearder = item.substring(0, 1).toUpperCase();
		var content = item.substring(1).toLowerCase();
		console.log(`hearder = ${hearder},content = ${content}`)
		return hearder + content;
	})

	return t;

	arr.map()

}

var nameArray = ["YUNIS","yunis","yUNis"];
var t = normalize(nameArray)
console.log(`t = ${t}`)


// filter 过滤元素
// 和map()类似，Array的filter()也接收一个函数。
// 和map()不同的是，filter()把传入的函数依次作用于每个元素，
// 然后根据返回值是true还是false决定保留还是丢弃该元素。


var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); 
});
var r1 = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});
console.log(`r = ${r}`)





