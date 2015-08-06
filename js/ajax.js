$(function(){
	$('footer .logos').load('logos_footer.html #maestrosdelweb');

	$.get('js/usuario.json', function(info){
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;


		$('#avatar').append(avatar);

	});

});