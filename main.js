const typed = new Typed('.typed', {
	strings: [
		'<i > Fotografo </i>',
		'<i > Lhuis </i>'

	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 15000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '   ▎', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


function contacto() {
	Swal.fire({
		html: '<div class="contacto">' +
			'  <h1> contacto</h1>' +
			'   <div class="L-2"></div>' +
			'   <div class="c-r">' +
			'     <a href="http://wa.me/541144382987" target="_blank">' +
			'         <div class="c-r-2">' +
			'             <i class="fa-brands fa-whatsapp fa-fade i"></i>' +
			'             <h5>Whatsapp</h5>' +
			'          </div></a >' +
			'      <a href="https://www.instagram.com/lhuisruiz/" target="_blank">' +
			'           <div class="c-r-2">' +
			'               <i class="fa-brands fa-instagram fa-fade i"></i>' +
			'               <h5>@lhuisruiz</h5>' +
			'          </div>' +
			'     </a>' +
			'      <a href="https://www.instagram.com/ruizlhuis/" target="_blank">' +
			'           <div class="c-r-2">' +
			'               <i class="fa-brands fa-instagram fa-fade i"></i>' +
			'               <h5>@ruizlhuis</h5>' +
			'          </div>' +
			'     </a>' +
			'      <a href="https://www.facebook.com/lhuisruiz/" target="_blank">' +
			'           <div class="c-r-2">' +
			'               <i class="fa-brands fa-facebook fa-fade i"></i>' +
			'               <h5>lhuis ruiz</h5>' +
			'          </div>' +
			'     </a>' +
			'      <a href="https://www.tiktok.com/@lhuisruiz" target="_blank">' +
			'          <div class="c-r-2">' +
			'            <i class="fa-brands fa-tiktok fa-fade i"></i>' +
			'                <h5>tiktok</h5>' +
			'            </div>' +
			'        </a>' +
			'    </div>' +
		//	'    <div class="L-3"></div>' +
			//'    <a href="https://play.google.com/store/apps/details?id=lhuis.appipu&pcampaignid=web_share"' +
			//'        target="_blank"><button class="apk">Desccargar App <i' +
		//	'                 class="fa-brands fa-google-play fa-bounce i-2"></i> </button></a>' +
			'	<div class="L-3"></div>' +
			'    <a href="http://action_share"' +
			'        ><button class="apk-1">share <i class="fa-solid fa-share-nodes i-2"></i></button></a>' +
			' </div>',
		//tamaño
		imageWidth: 300,
		imageHeight: 300,
		//cerrar
		padding: '1px',
		showCloseButton: true,
		showConfirmButton: false,
		background: '#0a0a0a',
		backdrop: `
		rgb(54 54 54 / 58%)  `,

	})
} function qr() {
	Swal.fire({
		imageUrl: 'https://res.cloudinary.com/fotoqe123/image/upload/v1695777987/qr-code_9_nqtr3b.png',

		//tamaño
		imageWidth: 300,
		imageHeight: 300,
		//cerrar
		padding: '0rem',
		showCloseButton: true,
		showConfirmButton: false,
		backdrop: `
		rgb(54 54 54 / 58%)  `,
		background: 'linear-gradient(#000,#000)',
	})
}