


// 在一个对象中绑定函数，称为这个对象的方法。

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};



var age = xiaoming.age();
console.log(`age = ${age}`)



function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

function yunisTestApply(argument) {
	
}

xiaoming.age(); // 25

getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空

//调用 getAge 方法 ， 指向 xiaoming ，参数为 []

//










