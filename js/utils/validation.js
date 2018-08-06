function validationForm(form) {
    var nombre = form.name;

    const exp = /^\s+$/; // Expresion que revisa si hay solo espacios vacios

    function valid(attr) {
        if (attr == null || attr.value.lenght === 0 || exp.test(attr.value)) {
            attr.style.border = '1px solid red';
        } else {
            attr.style.border = '1px solid green';
        }
    }

    if (valid(nombre)) {
        return false;
    }

}
// Previsualizador de imagen de producto
const btnPreview = document.getElementById('btnpreview');

btnPreview.addEventListener('click', () => {
    var image = document.getElementById('image');
    const exp = /^\s+$/;
    // Se crea
    let containerImg = document.querySelector('.previewimage');
    // Vaciar el contenedor de vista previa
    containerImg.innerHTML = "";
    // Se crea el elemento para ser renderizado
    let img = document.createElement('img');
    img.classList.add('img-fluid');
    img.src = image.value;
    if (fetchImage(img)) {
        containerImg.appendChild(img);
    }
    else {
        containerImg.innerHTML = "<p>La url de la imagen no es válida. Revisa e intenta nuevamente</p>";
    }

})

// Funcion que revisa si la imagen se renderiza correctamente en el DOM (para evitar enlaces rotos)
function fetchImage(img) {
    if (img.complete) {
        return true;
    }
    else {
        return false;
    }
    return true;
}