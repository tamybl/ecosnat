

// function products () {
//     var container = document.querySelector('#productos');
//     var db = find();

//     db.forEach(element => {
//         var link = document.createElement('a');
//         var img = document.createElement('img');
//         var title = document.createElement('h4');
//         var pNormal = document.createElement('p');
//         var pInternet = document.createElement('p');

//         link.className("col-md-4");
//     });
// }

document.addEventListener('DOMContentLoaded', function () {
    const db = window.localStorage;
    var products = JSON.parse(db.getItem('products'));

    template = ``;
    products.forEach(function (product) {
        if (product.important) {
            template += `
            <div class="catalogue__product-card">
                <div class="catalogue__product-rate">
                    <span>* * * <span>
                </div>
                <img src="${product.image}" class="img-fluid catalogue__product-image">
                <h4 class="catalogue__product-title">${product.name}</h4>
                <div class="catalogue__product-price">
                    <span class="catalogue__product-price-git addnormal">Normal $</span>
                    <span>${product.normalPrice}</span>
                </div>
                <div>
                    <span>Oferta $</span>
                    <span>${product.internetPrice}</span>
                </div>
                <div class="catalogue__product-cart">
                    <button><i class="fas fa-shopping-cart"></i></button>
                </div>
            </div>`;
        }

    })
    $("#catalogue").innerHTML = template;
})
