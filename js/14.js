'use strict'
/*
	在JavaScript的世界里，一切都是对象。
*/

typeof 123; // 'number'
typeof NaN; // 'number'
typeof 1.23; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'

typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'

console.log(`typeof 1.23 is ${typeof 1.23}`)

/*

	特别注意null的类型是object，
	Array的类型也是object，
	如果我们用typeof将无法区分出 null、Array 和通常意义上的 object——{}

 */


/*
	包装对象
	number、boolean和string都有包装对象。
	没错，在JavaScript中，字符串也区分string类型和它的包装类型。
	包装对象用new创建

	虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，
	但他们的类型已经变为object了！
	所以，包装对象和原始值用===比较会返回false

	所以闲的蛋疼也不要使用包装对象！尤其是针对string类型！！！


 */
typeof new Number(123); // 'object'
new Number(123) === 123; // false

typeof new Boolean(true); // 'object'
new Boolean(true) === true; // false

typeof new String('str'); // 'object'
new String('str') === 'str'; // false


/*
	* 不要使用new Number()、new Boolean()、new String()创建包装对象；

	* 用parseInt()或parseFloat()来转换任意类型到number；
 
	* 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

	* 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
 
	* typeof操作符可以判断出number、boolean、string、function和undefined；
 
	* 判断Array要使用Array.isArray(arr)；
 
	* 判断null请使用myVar === null；
 
	* 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
 
	* 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。


 */
