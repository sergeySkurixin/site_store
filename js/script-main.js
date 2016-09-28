var list_inner_menu=$('ul#list_grey>li ul');

//скрыть/показать под меню в сером меню
function innerMenu(event){
	if(window.innerWidth<945)
	{
		$(event.data.foo).toggle("fast");
		$(event.data.boo).toggleClass('obvodka-selected');
		return false;
	}
}

//обработчик нажатия на меню в моб версии
document.getElementById('open-close').addEventListener("click", function handler() {
	$('#list_grey').toggle("fast");
});

//изменение размера окна
window.addEventListener("resize",function onresize(){
	if(window.innerWidth<945)
	{
		//скрытие серого меню
		$('#list_grey').hide();
	}
	else
	{		
		//скрытие под меню в сером меню
		$('#list_grey').show();
		$('ul#list_grey>li>a').removeClass('obvodka-selected');
		$('ul#list_grey>li ul.inner').hide();
		
	}
});

//для моб.версии при загрузке страницы
if(window.innerWidth<945)
{
	//скрытие серого меню при загрузке
	$('#list_grey').hide();
}
	
//обрабока нажатий в сером меню на ссылки, по соседству с которыми есть подменю
$.each(list_inner_menu,function(i,elem){
	var href = $(elem).siblings('a');
	href.bind('click',{foo:elem,boo:href},innerMenu);
})

//background для не пустого input в шапке
var list_imputs=$('.form-login input[type!="submit"]');
for(i=0;i<list_imputs.length;i++)
{
	list_imputs.bind( 'change', function changeInput(){
		if(this.value.length)
			$(this).addClass('focused-element');
		else
			$(this).removeClass('focused-element');
	});
}

//шрифты

Cufon.replace("#phone-number", { fontFamily: 'Myriad Pro' });