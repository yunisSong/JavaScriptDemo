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
	c.mousemove(function(event) {
		/* Act on the event */
		console.log('mouth move');

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


});

