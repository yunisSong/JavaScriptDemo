'use strict'

/*
	正则表达式
 */

var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

var re = /^\d{3}\-\d{3,8}$/;
var resout = re.test("020-123");
console.log(`item = ${resout}`);


//切割字符串

var s1 = 'a b   c'.split(' '); //['a', 'b', '', '', 'c']
var s2 = 'a b   c'.split(/\s+/); // ['a', 'b', 'c']
var s3 = 'a,b, c  d'.split(/[\s\,]+/); // ['a', 'b', 'c', 'd']
var s4 = 'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']

console.log(`s1 = ${s1}`)
console.log(`s2 = ${s2}`)
console.log(`s3 = ${s3}`)
console.log(`s4 = ${s4}`)


// 分组
/*

除了简单地判断是否匹配之外，正则表达式还有提取子串的强大功能。
用()表示的就是要提取的分组（Group）

 */

var re = /^(\d{3})-(\d{3,8})$/;
re.exec('010-12345'); // ['010-12345', '010', '12345']
re.exec('010 12345'); // null

/*

如果正则表达式中定义了组，就可以在RegExp对象上用exec()方法提取出子串来。

exec()方法在匹配成功后，会返回一个Array，
第一个元素是正则表达式匹配到的整个字符串，
后面的字符串表示匹配成功的子串。

exec()方法在匹配失败时返回null。


 */ 

// 贪婪匹配
// 正则表达式默认是匹配尽可能多的字符
// 如果想不使用贪婪模式 可以在要匹配的选项后面加上？


// 全局搜索

var r1 = /test/g;
var r2 = new RegExp('test', 'g');


// 正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。







