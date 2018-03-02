'use strict';

$(document).ready(function()
{
	var a = $('#test-linkA');
	a.on('click', function () {
		alert('Hello A!');
	});

	var b = $('#test-linkB');
	b.click(function () {
    	alert('Hello B!');
	});

	var c = $('#test-linkC');

	c.dblclick(function(event) {
		/* Act on the event */
		alert('Double Hello C!');
	});


	c.mouseenter(function(event) {
		/* Act on the event */
		console.log('mouth on');
	});

	c.mouseleave(function(event) {
		/* Act on the event */
		console.log('mouth leave');
	});
	//鼠标在 标签  dom 范围内移动
	c.mousemove(function(e) {
		/* Act on the event */
		console.log('mouth move ' + e.pageX + '  ' + e.pageY);

	});

	c.hover(function() {
		/* Stuff to do when the mouse enters the element */
		console.log('mouth on');
		c.css('color',"red");
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		console.log('mouth leave');
	
		c.css('color',"blue");

	});


	var button1 = $('#testPopupButton1');
	var button2 = $('#testPopupButton2');

	function popupTestWindow() {
	    window.open('/');
	}

	button1.click(function () {
	    popupTestWindow();
	});

	button2.click(function () {
	    // 不立刻执行popupTestWindow()，100毫秒后执行:
	    setTimeout(popupTestWindow, 100);
	});

});



$(function () {
    console.log('init A...');
});
$(function () {
    console.log('init B...');
});
$(function () {
    console.log('init C...');
});