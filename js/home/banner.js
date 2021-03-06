/* 
    Funcion que dado un elemento contenedor y un tiempo, revisa las imagenes disponibles
    y genera un slider.
*/
function banner(contenedor, time) {
    var container = document.querySelector(contenedor);
    var images = container.querySelectorAll('img');
    container.innerHTML = "";

    var img = document.createElement('img');
    img.className = "img-fluid";
    let lastElement = images.length - 1;
    img.src = images[lastElement].src;
    container.appendChild(img);

    randomImg(img, time, images, 0);


}


function randomImg(img, time, arr, index) {

    if (index == arr.length - 1) {
        setTimeout(function () {
            img.src = arr[index].src;
            randomImg(img, time, arr, 0);


        }, time)
    } else {
        setTimeout(function () {
            img.src = arr[index].src;
            index++;
            randomImg(img, time, arr, index);

        }, time)
    }


}

banner('#slider', 2000);