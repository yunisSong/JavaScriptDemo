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








