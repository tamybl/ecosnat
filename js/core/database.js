var products = [];
setData();

function $(selector) {
    return document.querySelector(selector);
}
// Evento cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function () {



})

function Cart() {
    // Objeto inicial con 10  productos
    this.products = [{
            _id: 0,
            name: "Aceite de Argán",
            brand: "Now Foods",
            quantity: 118,
            format: "ml",
            image: "https://s3.images-iherb.com/now/now07736/y/5.jpg",
            description: 'El Aceite de Argan Orgánico de Marruecos es beneficioso para todos los tipos de piel debido a su alto contenido en ácidos grasos. El Aceite de Argan Orgánico es un producto multi-functional. Añade brillo a su pelo y proporciona hidratación para su piel, cabello, cuero cabelludo y las cutículas de las uñas. También ayuda a calmar piel dañada e irritada. Al ser fácil de absorber, el Aceite de Argan Orgánico ayuda a mantener un equilibrio sano del pH de la piel.',
            normalPrice: 18990,
            internetPrice: 16990,
            url_path: "aceite-de-argan-118-ml",
            website: "https://www.google.cl",
            category: "Suplemento",
            important: true
        },
        {
            _id: 1,
            name: "Multivitaminico Sentry",
            brand: "Century",
            quantity: 130,
            format: "Cápsulas",
            image: "https://s3.images-iherb.com/cen/cen22380/y/6.jpg",
            description: 'Sentry es un Suplemento que contiene mas de 40 tipos de vitaminas y minerales necesarios para el correcto funcionamiento del organismo.',
            normalPrice: 3990,
            internetPrice: 2990,
            url_path: "sentry-suplemento-multivaminico",
            website: "https://www.google.cl",
            category: "Comida",
            important: true
        },
        {
            _id: 2,
            name: "Crema de Manos de Aceite de Argán",
            brand: "Madrelabs",
            quantity: 71,
            format: "g",
            image: "https://s3.images-iherb.com/mli/mli00248/y/12.jpg",
            description: 'Crema de manos concentrada y rica en humectantes ayuda a humectar la piel seca y dañada, dejándola con una sedosa y suave. No contiene fragancias agregadas, por lo que es perfecta para cualquiera que tenga sensibilidad a los perfumes. Contiene aceites de nuez de argán, marula y coco más manteca de karité, el cual posee propiedades antioxidantes y contiene ácidos grasos esenciales para una humectación equilibrada.',
            normalPrice: 3990,
            internetPrice: 2990,
            url_path: "sentry-suplemento-multivaminico-",
            website: "https://www.google.cl",
            category: "Deportistas",
            important: true
        },
        {
            _id: 2,
            name: "Crema de Manos de Aceite de Argán",
            brand: "Madrelabs",
            quantity: 71,
            format: "g",
            image: "https://s3.images-iherb.com/mli/mli00248/y/12.jpg",
            description: 'Crema de manos concentrada y rica en humectantes ayuda a humectar la piel seca y dañada, dejándola con una sedosa y suave. No contiene fragancias agregadas, por lo que es perfecta para cualquiera que tenga sensibilidad a los perfumes. Contiene aceites de nuez de argán, marula y coco más manteca de karité, el cual posee propiedades antioxidantes y contiene ácidos grasos esenciales para una humectación equilibrada.',
            normalPrice: 3990,
            internetPrice: 2990,
            url_path: "crema-manos-madrelabs-71g",
            website: "https://www.google.cl",
            category: "Deportistas",
            important: true
        }
    ];

}

function Cartview() {

}

// Renderizar Destacados
var cart = new Cart();
document.addEventListener('DOMContentLoaded', function () {
    template = ``;
    cart.products.forEach(function (product) {
        if (product.important) {
            template += `
            <div class="catalogue__product-card">
                <img src="${product.image}" class="img-fluid catalogue__product-image">
                <h4 class="catalogue__product-title">${product.name}</h4>
                <div><span>Normal $</span><span>${product.normalPrice}</span></div>
                <div><span>Normal $</span><span>${product.internetPrice}</span></div>
                <div class="catalogue__product-cart"><button>Añadir</button></div>
            </div>`;
            console.log(product);
        }

    })
    $("#catalogue").innerHTML = template;
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
    } else {
        console.log('La referencia no es válida');
    }


}


addData("Vitamina C", "Now Foods", "100", "comprimidos", "https://s3.images-iherb.com/now/now00680/y/6.jpg", "Vitamin C is a water soluble nutrient well known for its vital role in the immune system. Vitamin C is also necessary for the production of collagen (a structural protein in connective tissue) and is therefore important for skin, bone, and joint health. Vitamin C is needed for amino acid metabolism.", 5990, 3990, "vitamina-c-now-foods", "www.now.com");


getData("products");