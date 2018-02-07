'use strict';


// var fx = function (x) { return x; }
// var ff = function (f) { return fx; }



// 定义数字0:
var zero = function (f) {
    return function (x) {
        return x;
    }
};

// 定义数字1:
var one = function (f) {
    return function (x) {
        return f(x);
    }
};

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}

var two = add(one,one);



var yuislog = function (a) {
	a = a || "----";
    console.log(`print ${a} times`);
    return a;
};


(one(yuislog))("one");
/*
	(one(yuislog))("one");
-> ( one(yuislog) )("one"); 调用 one 函数 ，参数为“one”
-> one(yuislog) -> var one = function (f) {return function (x) {return f(x);}}; 
-> return func(x){ return yuislog(x)};
-> yuislog("one")


 */

(two(function (a) {
	a = a || "!!!!!!!!";
    console.log(`print ${a} times`);
    return a;
}))();

(two(yuislog))("two");

/*
	(two(yuislog))("two");
->	(add(one,one))("two")
->	(one( one(yuislog) )) ("two")
->	one( one(yuislog) )
	-> 	one(yuislog)
		->	(one(yuislog));
		->  one(yuislog)
		-> one(yuislog) 
		-> return function (f) {return function (x) {return f(x);}}; 
		-> return func(x){ return yuislog(x)};
		-> return yuislog
	-> 	one(yuislog)
		->	(one(yuislog));
		->  one(yuislog)
		-> one(yuislog) 
		-> return function (f) {return function (x) {return f(x);}}; 
		-> return func(x){ return yuislog(x)};
		-> return yuislog

->	yuislog(yuislog("two"))
*/












