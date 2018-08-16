// var products = [];
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
            stock: 30,
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
            stock: 20,
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
            stock: 22,
            important: true
        },
        {
            _id: 3,
            name: "Shampoo y Jabón Mane 'n Tail",
            brand: "Mane 'n Tail",
            quantity: 946,
            format: "ml",
            image: "https://s3.images-iherb.com/mnt/mnt54364/y/5.jpg",
            description: 'Crema de manos concentrada y rica en humectantes ayuda a humectar la piel seca y dañada, dejándola con una sedosa y suave. No contiene fragancias agregadas, por lo que es perfecta para cualquiera que tenga sensibilidad a los perfumes. Contiene aceites de nuez de argán, marula y coco más manteca de karité, el cual posee propiedades antioxidantes y contiene ácidos grasos esenciales para una humectación equilibrada.',
            normalPrice: 13490,
            internetPrice: 11990,
            url_path: "crema-manos-madrelabs-71g",
            website: "https://www.google.cl",
            category: "Deportistas",
            stock: 10,
            important: true
        }
    ];
    this.getData = function (parameter) {
            console.log('Obtener data');
            let db = window.localStorage;
            if (db.getItem(parameter) != null) {
                console.log(JSON.parse(db.getItem(parameter)));
            } else {
                console.log('La referencia no es válida');
            }
        
        

    }
    // Funcion que captura los datos del formulario despues de que estos han pasado la validación
    this.addData = function (pname, pbrand, pquantity, pformat, pimage, pdescription, pnormalPrice, pinternetPrice, purl_path, pwebsite, pcategory, pstock, pstatus) {
        var id;
        var db = window.localStorage;
        var products = JSON.parse(db.getItem('products'));
        id = products.length;
        let newItem = {
            _id: id,
            name: pname,
            brand: pbrand,
            quantity: pquantity,
            format: pformat,
            image: pimage,
            description: pdescription,
            normalPrice: pnormalPrice,
            internetPrice: pinternetPrice,
            url_path: purl_path,
            website: pwebsite,
            category: pcategory,
            stock: pstock,
            important: pstatus
        }

        products.push(newItem);

        db.setItem('products', JSON.stringify(products));
    }
}

function Cartview() {

}

var cart = new Cart();

function setData() {
    // Se instancia el objeto Cart() y se llama la lista inicial de productos disponibles
    var list = new Cart();
    var products = list.products;
    console.log(products);

    let db = window.localStorage;
    let productItem = {
        _id: 4,
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




// Funcion que lee las distintas tablas del local storage
// function getData(dbName) {
//     console.log('Obtener data');
//     let db = window.localStorage;
//     if (db.getItem(dbName) != null) {
//         console.log(JSON.parse(db.getItem(dbName)));
//     } else {
//         console.log('La referencia no es válida');
//     }


// }


cart.addData("Vitamina C", "Now Foods", "100", "comprimidos", "https://s3.images-iherb.com/now/now00680/y/6.jpg", "Vitamin C is a water soluble nutrient well known for its vital role in the immune system. Vitamin C is also necessary for the production of collagen (a structural protein in connective tissue) and is therefore important for skin, bone, and joint health. Vitamin C is needed for amino acid metabolism.", 5990, 3990, "vitamina-c-now-foods", "www.now.com", "Suplemento", 20, true);


cart.getData("products");