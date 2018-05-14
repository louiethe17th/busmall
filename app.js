'Use strict'

var allPictures = [];

var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');
var clickAmmount = document.getElementById('clickList');
var nameList = document.getElementById('nameList');

var pictureIndex1 = 0;
var pictureIndex2 = 1;
var pictureIndex3 = 2;

function Products(src, name) {
    this.src = src;
    this.name = name;

    this.clicked = 0;

    allPictures.push(this);
}

imgEl1.addEventListener('click', function () {
    allPictures[pictureIndex1].clicked++;
    chooseNewProduct();
    totalClicks();
})

imgEl2.addEventListener('click', function () {
    allPictures[pictureIndex2].clicked++;
    chooseNewProduct();
    totalClicks();
})

imgEl3.addEventListener('click', function () {
    allPictures[pictureIndex3].clicked++;
    chooseNewProduct();
    totalClicks();
})

function chooseNewProduct() {
    pictureIndex1 = Math.floor(Math.random() * allPictures.length);
    imgEl1.src = allPictures[pictureIndex1].src;
    pictureIndex2 = Math.floor(Math.random() * allPictures.length);
    imgEl2.src = allPictures[pictureIndex2].src;
    pictureIndex3 = Math.floor(Math.random() * allPictures.length);
    imgEl3.src = allPictures[pictureIndex3].src;
}

function totalClicks() {

    clickList.innerHTML = ''

    for (i in allPictures) {

        

        var clLi = document.createElement('li');
        clLi.textContent = allPictures[i].clicked;

        clickAmmount.appendChild(clLi);


    }
}


function productNames() {

    
    for (i in allPictures) {

        

        var nameLi = document.createElement('li');
        nameLi.textContent = allPictures[i].name + ': ';

        nameList.appendChild(nameLi);


    }
}

new Products('img/bag.jpg', 'Nice bag');
new Products('img/banana.jpg', 'Banana');
new Products('img/bathroom.jpg', 'Bathroom boi');
new Products('img/boots.jpg', 'booties');
new Products('img/breakfast.jpg', 'breaky boi');
new Products('img/bubblegum.jpg', 'bubblegum');
new Products('img/chair.jpg', 'chair');
new Products('img/cthulhu.jpg', 'Cthulhu');
new Products('img/dog-duck.jpg', 'dog duck');
new Products('img/dragon.jpg', 'dragon');
new Products('img/pen.jpg', 'pen');
new Products('img/pet-sweep.jpg', 'pet sweep');
new Products('img/scissors.jpg', 'scissors');
new Products('img/shark.jpg', 'shark');
new Products('img/sweep.png', 'sweep');
new Products('img/tauntaun.jpg', 'tauntaun');
new Products('img/unicorn.jpg', 'unicorn');
new Products('img/usb.gif', 'usb');
new Products('img/water-can.jpg', 'water-can');
new Products('img/wine-glass.jpg', 'wine glass');




chooseNewProduct();
productNames();
totalClicks();