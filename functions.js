var request = new XMLHttpRequest();
request.open('GET', 'https://lugus-hiring.frb.io/product', true);

window.onload = function() {
    request.onload = function() {
        var data = JSON.parse(request.responseText);
        console.log(data);

        var title = document.querySelector('.title > h2');
        title.textContent = data.product.title;

        var desc = document.querySelector('.desc > p');
        desc.textContent = data.product.description;

    }
    request.send();
};


