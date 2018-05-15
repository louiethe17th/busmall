'Use strict'

var allPictures = [];

var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');
var clickAmmount = document.getElementById('clickList');
var nameList = document.getElementById('nameList');
var totalClicks = 0;

var pictureIndex1 = 0;
var pictureIndex2 = 1;
var pictureIndex3 = 2;

function Products(src, name) {
    this.src = src;
    this.name = name;

    this.clicked = 0;

    allPictures.push(this);
}

imgEl1.addEventListener('click', img1Callback);

function img1Callback() {
    allPictures[pictureIndex1].clicked++;
    chooseNewProduct();
    totalClicks++

}


imgEl2.addEventListener('click', img2Callback);

function img2Callback() {
    allPictures[pictureIndex2].clicked++;
    chooseNewProduct();
    totalClicks++
}




imgEl3.addEventListener('click', img3Callback);

function img3Callback() {
    allPictures[pictureIndex3].clicked++;
    chooseNewProduct();
    totalClicks++
}

function chooseNewProduct() {
    checkTotalClicks();

    var cantBeThis = [pictureIndex1, pictureIndex2, pictureIndex3];
    // console.log(cantBeThis);

    // var previous1 = pictureIndex1;
    // var previous2 = pictureIndex2;
    // var previous3 = pictureIndex3;

    do {
        pictureIndex1 = Math.floor(Math.random() * allPictures.length);
    } while (cantBeThis.includes(pictureIndex1));
    cantBeThis.push(pictureIndex1);

    do {
        pictureIndex2 = Math.floor(Math.random() * allPictures.length);
    } while (cantBeThis.includes(pictureIndex2));
    cantBeThis.push(pictureIndex2);


    do {
        pictureIndex3 = Math.floor(Math.random() * allPictures.length);
    } while (cantBeThis.includes(pictureIndex3));
    cantBeThis.push(pictureIndex3);


    imgEl1.src = allPictures[pictureIndex1].src;
    imgEl2.src = allPictures[pictureIndex2].src;
    imgEl3.src = allPictures[pictureIndex3].src;
}



function RenderResults() {


    for (i in allPictures) {



        var nameLi = document.createElement('li');
        nameLi.textContent = allPictures[i].name + ' clicked: ' + allPictures[i].clicked + ' times.'

        nameList.appendChild(nameLi);


    }
}

function checkTotalClicks() {
    if (totalClicks === 25) {


        RenderResults();

        imgEl1.removeEventListener('click', img1Callback);

        imgEl2.removeEventListener('click', img2Callback);

        imgEl3.removeEventListener('click', img3Callback);

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

