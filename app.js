const imagenes = ["img/a.jpg", "img/b.jpg", "img/c.jpg"]; // Rutas de imágenes
  let index = 0;

  function cambiarImagen() {
    index = (index + 1) % imagenes.length; // Cambia el índice cíclicamente
    document.getElementById("imagen").src = imagenes[index];
  }

  setInterval(cambiarImagen, 15000); // Cambia cada 3 segundos

  