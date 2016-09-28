function check_form(){
	var arr_mail = ["Bob@mail.ru", "Sid@hotmail.com"];
	var flag=0;
	if($('#registration_client #registr_name').val().length==0)
	{
		$('#registr_name').parent().addClass('bad_value');
		$('#misstakes #incorrect_name').show();
		flag=1;
	}
	else
	{
		$('#misstakes #incorrect_name').hide();
		$('#registr_name').parent().removeClass('bad_value');
	}
	
	if($.inArray($('#registration_client #registr_mail').val(),arr_mail)!=-1)
	{
		$('#registr_mail').parent().addClass('bad_value');
		$('#misstakes #same_email').show();
		flag=1;
	}
	else
	{
		$('#misstakes #same_email').hide();
		$('#registr_mail').parent().removeClass('bad_value');
	}
	
	if($('#registration_client #registr_mail').val().length==0)
	{
		$('#registr_mail').parent().addClass('bad_value');
		flag=1;
	}
	else
	{
		$('#registr_mail').parent().removeClass('bad_value');
	}
	
	if($('#registration_client #registr_password').val().length==0)
	{
		$('#registr_password').parent().addClass('bad_value');
		$('#misstakes #empty_password').show();
		flag=1;
	}
	else
	{
		$('#misstakes #empty_password').hide();
		$('#registr_password').parent().removeClass('bad_value');
	}
	
	if($('#registration_client #registr_password_confirm').val().length==0)
	{
		$('#registr_password_confirm').parent().addClass('bad_value');
		$('#misstakes #empty_password_confirm').show();
		flag=1;
	}
	else
	{
		$('#misstakes #empty_password_confirm').hide();
		$('#registr_password_confirm').parent().removeClass('bad_value');
	}
	
	if(flag==1)
	{
		$('#misstakes').show();
		return false;
	}
	else return true;
};