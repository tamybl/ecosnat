function validationForm(form) {
    let name = form.name;
    let brand = form.brand;
    let quantity = form.quantity;
    let format = form.format;
    let imageUrl = form.image;
    let description = form.description;
    let normalPrice = form.normalprice;
    let internetPrice = form.internetprice;
    let website = form.website;

    const exp = /^\s+$/; // Expresion que revisa si hay solo espacios vacios

    function valid(attr) {
        if (attr == null || attr.value.length === 0 || exp.test(attr.value)) {
            attr.style.border = '1px solid red';
        } else {
            attr.style.border = '1px solid green';
        }
    }

    if (valid(name)) {
        return false;
    }
    if (valid(brand)) {
        return false;
    }
    if(valid(quantity)) {
        return false;
    }
    if (valid(format)) {
        return false;
    }
}


// Carga Imagen de Producto y valida que el enlace funciona

const btnUpload = document.getElementById('btnupload');

btnUpload.addEventListener('click', () => {
    const imageInput = document.getElementById('image');
    const containerImg = document.querySelector('.previewimage');

    // Expresión que detecta si el link corresponde a la url de una imagen
    const exp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g;

    if (exp.test(imageInput.value)) {
        containerImg.innerHTML = "";
        // Se crea el elemento para ser renderizado
        let img = document.createElement('img');
        img.classList.add('img-fluid'); 
        img.src = imageInput.value;
        // Si corresponde a un enlace roto, lanzara este evento de error
        img.onerror = function (err) {
            console.log(err);
            containerImg.innerHTML = "<p>No se puede cargar la imagen.</p>";
        };
        let loader = document.createElement('img');
        loader.src = 'img/loader.gif';
        containerImg.appendChild(loader);
        // Si la imagen posee un link que funciona, gatillará el evento de onload que le dará tiempo a la imagen de cargar antes de arrojar error.
        img.onload = function () {

            if (fetchImage(img)) {
                imageInput.style.border = '1px solid green';
                containerImg.replaceChild(img, loader);
                
            }
        };
    }
    else {
        imageInput.style.border = '1px solid red';
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

// Search

var btnSearch = document.querySelector('#searchinput');

btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
})