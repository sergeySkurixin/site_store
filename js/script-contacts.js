function check_form(){
	var arr_mail = ["Bob@mail.ru", "Sid@hotmail.com"];
	var flag=0;
	if($('#information_about_client #inform_name').val().length==0)
	{
		$('#inform_name').parent().addClass('bad_value');
		$('#misstakes #incorrect_name').show();
		flag=1;
	}
	else
	{
		$('#misstakes #incorrect_name').hide();
		$('#inform_name').parent().removeClass('bad_value');
	}
	
	if($('#information_about_client #inform_mail').val().length==0)
	{
		$('#inform_mail').parent().addClass('bad_value');
		flag=1;
	}
	else
	{
		$('#inform_mail').parent().removeClass('bad_value');
	}
	
	if($.inArray($('#information_about_client #inform_mail').val(),arr_mail)!=-1)
	{
		$('#misstakes #same_email').show();
		flag=1;
	}
	else
	{
		$('#misstakes #same_email').hide();
	}
	
	if(flag==1)
	{
		$('#misstakes').show();
		return false;
	}
	else return true;
};
