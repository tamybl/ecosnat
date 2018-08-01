

function products () {
    var container = document.querySelector('#productos');
    var db = find();

    db.forEach(element => {
        var link = document.createElement('a');
        var img = document.createElement('img');
        var title = document.createElement('h4');
        var pNormal = document.createElement('p');
        var pInternet = document.createElement('p');

        link.className("col-md-4");
    });
}