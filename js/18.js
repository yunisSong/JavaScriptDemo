'use strict';
/*
navigator.appName：浏览器名称；
navigator.appVersion：浏览器版本；
navigator.language：浏览器设置的语言；
navigator.platform：操作系统类型；
navigator.userAgent：浏览器设定的User-Agent字符串。

navigator的信息可以很容易地被用户修改!
 */
console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);

// screen


/*
screen对象表示屏幕的信息，常用的属性有：

screen.width：屏幕宽度，以像素为单位；
screen.height：屏幕高度，以像素为单位；
screen.colorDepth：返回颜色位数，如8、16、24。

 */
console.log('Screen size = ' + screen.width + ' x ' + screen.height);
console.log('Screen colorDepth = ' + screen.colorDepth);

//location


/*
	location对象表示当前页面的URL信息
 eg:
 	http://www.example.com:8080/path/index.html?a=1&b=2#TOP

	location.protocol; // 'http'
	location.host; // 'www.example.com'
	location.port; // '8080'
	location.pathname; // '/path/index.html'
	location.search; // '?a=1&b=2'
	location.hash; // 'TOP'

	要加载一个新页面，可以调用location.assign()。
	如果要重新加载当前页面，调用location.reload()方法非常方便

	if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    location.assign('http://www.baidu.com'); // 设置一个新的URL地址
}

 */






