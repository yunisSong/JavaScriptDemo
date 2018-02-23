'use strict';
var checkRegisterForm = function () {

   // TODO:
 	var input_name = document.getElementById('username').value;
    var input_password = document.getElementById('password').value;
    var input_password2 = document.getElementById('password-2').value;

    var re1 = /^[\w\d]{3,10}$/;

	var resout1 = re1.test(input_name);
	console.log(input_name+ '  ' +resout1);
	if (!resout1) {
		alert("用户名需要为3-10位的数组或者字母");
		return false;
	}

	var re2 = /^.{6,20}$/;
	var resout2 = re2.test(input_password);
	console.log(input_password+ '  ' +resout2);
	if (!resout2) {
		alert("密码需要为6-20位");
		return false;
	}

	var resout3 = false;
	if (input_password == input_password2) {
		resout3 = true;
	}
	if (!resout3) {
		alert("密码输入不一致");
		return false;
	}

    return true;
}





function callback() {
    console.log('Done');
}
console.log('before setTimeout()');
setTimeout(callback, 1000); // 1秒钟后调用callback函数
console.log('after setTimeout()');


