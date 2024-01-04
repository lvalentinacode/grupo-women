tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        }
      }
    }
  }

  const botonesConsultar = document.querySelectorAll(".btn-consultar");

for (const botonConsultar of botonesConsultar) {
  botonConsultar.addEventListener("click", async () => {

    const imagen = botonConsultar.dataset.image;
    const titulo = botonConsultar.dataset.title;

    const urlProducto = `https://example.com/product/${titulo}`;

    const mensaje = `Hola! Quisiera consultar sobre ${titulo}.`;

    const mensajeConUrl = `${mensaje}[URL]${urlProducto}`;

    await window.open("https://api.whatsapp.com/send/?phone=541156050554&text=${mensajeConUrl}&type=phone_number");
  });
}