'use strict';
// Uncaught TypeError: Cannot read property 'getContext' of null
// 出现上面这样的错误，同样是因为 页面还没有渲染结束，就去获取元素，需要页面加载完成后再去获取

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
function canvastest() {
	var
    canvas = document.getElementById('test-shape-canvas'),
    ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
	ctx.fillStyle = '#dddddd'; // 设置颜色
	ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
	// 利用Path绘制复杂路径:
	var path=new Path2D();
	path.arc(75, 75, 50, 0, Math.PI*2, true);
	path.moveTo(110,75);
	path.arc(75, 75, 35, 0, Math.PI, false);
	path.moveTo(65, 65);
	path.arc(60, 65, 5, 0, Math.PI*2, true);
	path.moveTo(95, 65);
	path.arc(90, 65, 5, 0, Math.PI*2, true);
	ctx.strokeStyle = '#0000ff';
	ctx.stroke(path);
}
addLoadEvent(canvastest)