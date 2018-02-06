'use strict';

var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'

/*


不在任何函数内定义的变量就具有全局作用域。
实际上，JavaScript默认有一个全局对象window，
全局作用域的变量实际上被绑定到window的一个属性


 */ 

function foo() {
    alert('foo');
}

foo(); // 直接调用foo()
window.foo(); // 通过window.foo()调用


window.alert('调用window.alert()');
// 把alert保存到另一个变量:
var old_alert = window.alert;
// 给alert赋一个新函数:
window.alert = function () {
	console.log('无法用alert()显示了!')
}

alert('无法用alert()显示了!');

// 恢复alert:
window.alert = old_alert;
alert('又可以用alert()了!');

// 减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中





