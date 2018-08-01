function validationForm(form) {
    var nombre = form.name;
    var marca = form.brand;
    var estracto = form.description;
    var pNormal = form.pnormal;

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