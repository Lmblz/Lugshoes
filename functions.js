var request = new XMLHttpRequest();
request.open('GET', 'https://lugus-hiring.frb.io/product', true);

window.onload = function() {
    request.onload = function() {
        var donnees = JSON.parse(request.responseText);
        console.log(donnees);

        var title = document.querySelector('.title > h2');
        title.textContent = donnees.product.title;

        var desc = document.querySelector('.desc > p');
        desc.textContent = donnees.product.description;

    }
    request.send();
};


