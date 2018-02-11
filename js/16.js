'use strict'

/*

	json

 */

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var s = JSON.stringify(xiaoming);
/*
要输出得好看一些，可以加上参数，按缩进输出：
 */
var s1 = JSON.stringify(xiaoming, null, '  ');
/*
第二个参数用于控制如何筛选对象的键值，
如果我们只想输出指定的属性，可以传入Array：
 */
var s2 = JSON.stringify(xiaoming, ['name', 'skills'], '  ');
/*
还可以传入一个函数，这样对象的每个键值对都会被函数先处理：

 */
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
var s3 = JSON.stringify(xiaoming, convert, '  ');


console.log(s);
/*
{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}
 */
console.log(s1);
/*
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" Middle School",
  "skills": [
    "JavaScript",
    "Java",
    "Python",
    "Lisp"
  ]
}
 */
console.log(s2);
/*
{
  "name": "小明",
  "skills": [
    "JavaScript",
    "Java",
    "Python",
    "Lisp"
  ]
}
 */


console.log(s3);
/*
{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.65,
  "grade": null,
  "middle-school": "\"W3C\" MIDDLE SCHOOL",
  "skills": [
    "JAVASCRIPT",
    "JAVA",
    "PYTHON",
    "LISP"
  ]
}
 */ 






/*
如果我们还想要精确控制如何序列化小明，
可以给xiaoming定义一个toJSON()的方法，
直接返回JSON应该序列化的数据：
 */

var xiaoming1 = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};


var s4 = JSON.stringify(xiaoming1);

console.log(s4);//{"Name":"小明","Age":14}



//反序列化
//拿到一个JSON格式的字符串，
//我们直接用JSON.parse()把它变成一个JavaScript对象：


JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45


// JSON.parse()还可以接收一个函数，用来转换解析出的属性：

var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}
 