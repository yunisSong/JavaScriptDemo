'use strict';
var a = [1, 2, 3];

/*

for ... of循环和for ... in循环有何区别？

	for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。
	一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。

	当我们手动给Array对象添加了额外的属性后，
	for ... in循环将带来意想不到的意外效果：

 */

for (var item in a ) {
	console.log(`item = ${item}`)
}
for (var x of a) {
	console.log(`x = ${x}`)
}


a.name = "YunisTest";


for (var item in a ) {
	console.log(`---- item = ${item}`)
	/*
	 ---- item = 0
	 ---- item = 1
	 ---- item = 2
	 ---- item = names
	 */
}
for (var x of a) {
	console.log(`---- x = ${x}`)
}




a.forEach( function(element, index) {
	// statements
	console.log(`element = ${element},index = ${index}`)
});


