$(function(){
	$('p.right').click(function(){
		$('.logo_platform').addClass('anny');
		$('.logo-platform2').addClass('anny2');
		$('.logo-platform2').fadeIn(500);
	});
	
	$('p.righty').click(function(){
		$('.logo_platform').removeClass('anny');
		$('.logo_platform').css({'display':'block'});
		$('.logo-platform2').removeClass('anny2');
		$('.logo-platform2').css({'display':'none'});
	});
});