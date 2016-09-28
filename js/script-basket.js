$('li.counter>span.plus').click(function(){
	var textField=$(this).siblings('input');
	textField.val(parseInt(textField.val())+1);
	var number = $(this).closest('li.counter').siblings('li.basket_prices').find('.number_of_things');
	var priceForThing = number.parent().siblings('span.basket_price_for_thing').text().replace(/\s+/g, '');
	number.text(textField.val());
	var coast = parseInt(textField.val())*parseInt(priceForThing);
	number.siblings('span.basket_total_price').text(String(coast).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
});
$('li.counter>span.minus').click(function(){
	var textField=$(this).siblings('input');
	if(textField.val()>0)
	{
		textField.val(parseInt(textField.val())-1);
		var number = $(this).closest('li.counter').siblings('li.basket_prices').find('.number_of_things');
		var priceForThing = number.parent().siblings('span.basket_price_for_thing').text().replace(/\s+/g, '');
		number.text(textField.val());
		var coast = parseInt(textField.val())*parseInt(priceForThing);
		number.siblings('span.basket_total_price').text(String(coast).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	}
});
$('ul.basket_inner>li:last-child').click(function(){
	$(this).closest('li.basket_item').remove();
});
$('span#basket_deleteAll').click(function(){
	$('li.basket_item').remove();
});

var itogString=$('#total_price').text();
$('#total_price').text(itogString.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

$('li.counter>span').mousedown(function(){
	return false;
});

//изменение цвета рамки изображения при наведении на описание
$('a.description').hover(
        function(){ 
                $(this).closest('ul.basket_inner').prev().children().css("border-color","green");
        },function(){
                $(this).closest('ul.basket_inner').prev().children().css("border-color","grey");
});
