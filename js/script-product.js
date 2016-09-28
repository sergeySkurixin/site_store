$('div.counter>span.plus').click(function(){
	var textField=$(this).siblings('input');
	textField.val(parseInt(textField.val())+1);
});
$('div.counter>span.minus').click(function(){
	var textField=$(this).siblings('input');
	if(textField.val()>0)
	{
		textField.val(parseInt(textField.val())-1);
	}
});
$('div.counter>span').mousedown(function(){
	return false;
});