document.addEventListener("DOMContentLoaded", () => {
    const menuFiltros = document.querySelector(".menu-filtros");
    const contenedorProductos = document.querySelector(".contenedor-productos");
    const productos = document.querySelectorAll(".contenedor-productos .producto");
  
    menuFiltros.addEventListener("click", (event) => {
      const categoriaSeleccionada = event.target.textContent.toLowerCase();
  
      productos.forEach((producto) => {
        const categoriaProducto = producto.dataset.categoria.toLowerCase();
        producto.style.display =
          categoriaSeleccionada === "ver todo" || categoriaProducto === categoriaSeleccionada
            ? "flex"
            : "none";
      });
    });
  });
