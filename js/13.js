'use strict';
/*

generator 生成器

*/

var current_id = 0;


function* next_id() {
	var test= 0;
  	while(test < 5){
    	test +=1;
     	yield test;
   	}
	return;
}
var
    x,
    pass = true,
    g = next_id();


console.log(`next_id().next() = ${g.next().value}`)
console.log(`next_id().next() = ${g.next().value}`)
console.log(`next_id().next() = ${g.next().value}`)
console.log(`next_id().next() = ${g.next().value}`)
console.log(`next_id().next() = ${g.next().value}`)
console.log(`next_id().next() = ${g.next().value}`)
console.log(`next_id().next() = ${g.next().value}`)
console.log(`next_id().next() = ${g.next().value}`)
console.log(`next_id().next() = ${g.next().value}`)





