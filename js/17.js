'use strict'


/*
	面向对象
	JavaScript不区分类和实例的概念，
	而是通过原型（prototype）来实现面向对象编程。
 */

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;

/*
	JavaScript的原型链和Java的Class区别就在，
	它没有“Class”的概念，所有对象都是实例，
	所谓继承关系不过是把一个对象的原型指向另一个对象而已。
 */ 

/*
	Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，
	但是新对象什么属性都没有，因此，我们可以编写一个函数来创建xiaoming：
 */ 


// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true





/*
	JavaScript 对每个创建的对象都会设置一个原型，指向它的原型对象。
	当我们用obj.xxx访问一个对象的属性时，
	JavaScript引擎先在当前对象上查找该属性，
	如果没有找到，就到其原型对象上找，
	如果还没有找到，就一直上溯到Object.prototype对象，
	最后，如果还没有找到，就只能返回undefined。
 */ 

/*
	var arr = [1, 2, 3];
	原型链：
	arr ----> Array.prototype ----> Object.prototype ----> null
 */ 

// 构造函数


function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}
var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!
/* 
当使用 new 调用这个函数的时候，他就是一个构造函数，
他绑定的 this 指向新创建的对象，并默认返回 this
它的原型链：
xiaoming ----> Student.prototype ----> Object.prototype ----> null
*/ 
xiaoming.constructor === Student.prototype.constructor; // true
Student.prototype.constructor === Student; // true

Object.getPrototypeOf(xiaoming) === Student.prototype; // true

xiaoming instanceof Student; // true

/*

用new Student()创建的对象还从原型上获得了一个constructor属性，
它指向函数Student本身：
 */ 


function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};
/*
要让创建的对象共享一个hello函数，
根据对象的属性查找原则，
我们只要把hello函数移动到xiaoming、xiaohong这些对象共同的原型上就可以了，
也就是Student.prototype：

？？？ OC 的类方法 ？？？

 */ 


/*
原型链 
需要看JavaScript高级程序设计，
感觉这本书上面讲的比廖雪峰老师网站上讲的清楚。
 */

/*

	JavaScript的原型继承实现方式就是：
		1. 定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，
		并绑定this；
		2. 借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
		3. 继续在新的构造函数的原型上定义新方法。
 */ 
