// Evento cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function () {
    const db = window.localStorage;
    setData(db, 'products');
})

function setData (db, dbName) {
    let database = dbName;
    let productItem = {
        _id: 0,
        name: "Multivitaminico Sentry",
        quantity: 130,
        format: "Cápsulas",
        image: "https://s3.images-iherb.com/cen/cen22380/y/6.jpg",
        description: 'Sentry es un Suplemento que contiene mas de 40 tipos de vitaminas y minerales necesarios para el correcto funcionamiento del organismo.',
        normalPrice: 3990,
        internetPrice: 2990,
        url_path: "sentry-suplemento-multivaminico",
        website: "https://www.google.cl"
    }

    db.setItem(database, JSON.stringify(productItem));
    console.log(db);
}

function getData() {
    console.log('Obtener data');
}

