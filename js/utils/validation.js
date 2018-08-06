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
    let containerImg = document.querySelector('.previewimage');
    // Expresión que detecta si el link corresponde a la url de una imagen
    const exp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g;
    if (exp.test(image.value)) {
        containerImg.innerHTML = "";
        // Se crea el elemento para ser renderizado
        let img = document.createElement('img');
        img.classList.add('img-fluid');
        img.src = image.value;
        // Si corresponde a un enlace roto, lanzara este evento de error
        img.onerror = function () { 
            containerImg.innerHTML = "<p>No se puede cargar la imagen.</p>";
        }; 
        
        let loader = document.createElement('img');
            loader.src = 'img/loader.gif';
            containerImg.appendChild(loader);
        // Si la imagen posee un link que funciona, gatillará el evento de onload que le dará tiempo a la imagen de cargar antes de arrojar error.
        img.onload = function () {
            
            if (fetchImage(img)) {
                image.style.border = '1px solid green';
                containerImg.replaceChild(img, loader);
            }

        };
    }
    else {
        image.style.border = '1px solid red';
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