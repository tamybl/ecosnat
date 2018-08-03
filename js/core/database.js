var products = [];
setData();
// Evento cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function () {
    const db = window.localStorage;
    
})

function setData() {
    // let database = dbName;
    let db = window.localStorage;
    let productItem = {
        _id: 0,
        name: "Multivitaminico Sentry",
        brand: "Century",
        quantity: 130,
        format: "Cápsulas",
        image: "https://s3.images-iherb.com/cen/cen22380/y/6.jpg",
        description: 'Sentry es un Suplemento que contiene mas de 40 tipos de vitaminas y minerales necesarios para el correcto funcionamiento del organismo.',
        normalPrice: 3990,
        internetPrice: 2990,
        url_path: "sentry-suplemento-multivaminico",
        website: "https://www.google.cl"
    }

    products.push(productItem);

    db.setItem('products', JSON.stringify(products));

}

// Funcion que captura los datos del formulario despues de que estos han pasado la validación
function addData(pname, pbrand, pquantity, pformat, pimage, pdesription, pnormalPrice, pinternetPrice, purl_path, pwebsite) {
    var id;
    var db = window.localStorage;
    let newItem = {
        // _id: 0,
        name: pname,
        brand: pbrand,
        quantity: pquantity,
        format: pformat,
        image: pimage,
        description: pdesription,
        normalPrice: pnormalPrice,
        internetPrice: pinternetPrice,
        url_path: purl_path,
        website: pwebsite
    }

    products.push(newItem);

    db.setItem('products', JSON.stringify(products));

    // if(db == null) {
    //     id = 0;
    // }
    // else {
         
    // }

}

// Funcion que lee las distintas tablas del local storage
function getData(dbName) {
    console.log('Obtener data');
    let db = window.localStorage;
    if (db.getItem(dbName) != null) {
        console.log(JSON.parse(db.getItem(dbName)));
    }
    else {
        console.log('La referencia no es válida');
    }


}


addData("Vitamina C", "Now Foods", "100", "comprimidos", "https://s3.images-iherb.com/now/now00680/y/6.jpg", "Vitamin C is a water soluble nutrient well known for its vital role in the immune system. Vitamin C is also necessary for the production of collagen (a structural protein in connective tissue) and is therefore important for skin, bone, and joint health. Vitamin C is needed for amino acid metabolism.", 5990, 3990, "vitamina-c-now-foods", "www.now.com");


getData("products");

