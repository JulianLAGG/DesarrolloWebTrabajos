const trabajos = [
    {
        id: "TP_1.exe",
        titulo: "Relación y Style",
        desc: "Diseño de tarjetas de contenido utilizando CSS y paletas de colores.",
        enlace: "tp1/index.html",
    },
    {
        id: "TP_2.exe",
        titulo: "Navbar con Flexbox",
        desc: "Barra de navegación responsiva con enlaces internos.",
        enlace: "tp2/index.html",
    },
    {
        id: "TP_3.exe",
        titulo: "Tarjetas y Flexbox",
        desc: "Catálogo de productos en formato de tarjetas y botones interactivos",
        enlace: "tp3/index.html",
    },
    {
        id: "TP_4.exe",
        titulo: "Grid y Areas",
        desc: "Uso de grid, filas y columnas usando areas",
        enlace: "tp4/index.html",
    },
    {
        id: "TP_5.exe",
        titulo: "Diseño Web",
        desc: "Diseño web utilizando flexbox",
        enlace: "tp5/index.html",
    },
]; //aca guardo los trabajos, cuándo quiera sumar uno solo le agrego el id, titulo, desc y enlace simplifica el codigo del html porque así no tengo que cargar uno por uno

const contenedor = document.getElementById("proyectos"); //metodo que llama a los elementos por id, si quisiera llamar a uno en especifico podria usar e.varable para desconstruir el código
trabajos.forEach(({ id, titulo, desc, enlace }) => {
    contenedor.innerHTML += `
        <article class="window-card">
            <div class="window-header-minimal">${id}</div>
            <div class="card-content">
                <h2>${titulo}</h2>
                <p>${desc}</p>
                <a href="${enlace}" class="btn-terminal">[ Ejecutar ]</a>
            </div>
        </article>
    `;
}); // la misma estructura de este html ya la tenía en la versión anterior, ahora solo la simplifique para mostrar las cosas usando forEach
