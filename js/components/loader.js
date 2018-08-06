class LoaderImg extends HTMLElement {
    // Se llama al constructor
    constructor() {
        // Metodo super
        super();

    }
    // Ciclo de vida cuando el elemento es renderizado en el HTML
    connectedCallback() {
        // Sirve para generar estilos propios
        let loaderRoot = this.attachShadow({ mode: 'open' });
        loaderRoot.innerHTML = `<img src="img/loader.gif" class="loader">`;
    }
}

// Un nombre con guion para no confundir al navegador y evitar errores.
window.customElements.define('loader-img', LoaderImg);