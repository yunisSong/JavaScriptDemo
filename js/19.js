'use strict';

// document
/*
	document对象表示当前页面。
	由于HTML在浏览器中以DOM形式表示为树形结构，
	document对象就是整个DOM树的根节点。
	document的title属性是从HTML文档中的<title>xxx</title>读取的，
	但是可以动态改变：
 */
document.title = '努力学习JavaScript!';

/*
	要查找DOM树的某个节点，
	需要从document对象开始查找。
	最常用的查找是根据ID和Tag Name。
	用document对象提供的getElementById()和getElementsByTagName()
	可以按ID获得一个DOM节点和按Tag名称获得一组DOM节点
 */



function showDrinks(){
	var i,s,menu;
	menu = document.getElementById('drink-menu');
	var drinks = document.getElementsByTagName('dt');
	console.log(drinks);
	console.log(drinks.length);
	s = '提供的饮料有:';
	for (i=0; i < drinks.length; i++) {
	    s = s + drinks[i].innerHTML + ',';
	}
	console.log(s);
}


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  }
  else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(showDrinks);


function testDom(argument) {
	var js = document.querySelector('#test-p');

	console.log(js);
	// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
	var arr = document.getElementsByClassName('c-green')[0].getElementsByTagName('p');
	console.log(arr);


	// 选择<p>Haskell</p>:
	var haskell = document.getElementsByClassName('c-green')[1].lastElementChild;
	console.log(haskell);
	document.getElementById('')
}
addLoadEvent(testDom);
