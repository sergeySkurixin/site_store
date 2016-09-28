$('li.content-item img').error(function(){
	if($(this).parent().find('div.error_img').length==0)
		$(this).parent().append('<div class=\"error_img\">Фотография отсутствует</div>');
});