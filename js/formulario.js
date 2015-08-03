var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();


function mostrarFormulario(){
	$form.slideToggle();
	return: false;

}

function agregarPost(){
	return: false;

}

// Eventos

$button.click( mostrarFormulario );
$form.on('submit', agregarPost);