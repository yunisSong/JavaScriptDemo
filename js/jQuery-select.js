'use strict';

$(document).ready(function()
{
var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');



	// 重置初始化状态:
	form.find('*').show().off();
	form.find(':checkbox').prop('checked', false).off();
	deselectAllLabel.hide();
	// 拦截form提交事件:
	form.off().submit(function (e) {
	    e.preventDefault();
	    alert(form.serialize());
	});

	selectAll.change(function(event) {
		if (selectAll.prop('checked')) {
	        langs.prop("checked", true);
	    } else {
	        langs.prop("checked", false);
	    }
	});

});