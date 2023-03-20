'use strict'

let img1 = document.getElementById('img-one')
let img2 = document.getElementById('img-two')
let img3 = document.getElementById('img-three')

const items = {
    productName: [],
}

let allProducts = [];
// setting the amount of clicks
let maxClicks = 25;
let totalClicks = 0;

// Creating the constructor function that creates an object listed with each product, and has the following properties:
function Product(name, image) {
    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.views = 0;
    allProducts.push(this);
}

// Objects for the constructor 
let $bag = new Product('bag', './images/bag.jpg')
let $banana = new Product('banana', './images/banana.jpg')
let $bathroom = new Product('bathroom', './images/bathroom.jpg')
let $boots = new Product('boots', './images/boots.jpg')
let $breakfast = new Product('breakfast', './images/breakfast.jpg')
let $bubblegum = new Product('bubblegum', './images/bubblegum.jpg')
let $chair = new Product('chair', './images/chair.jpg')
let $cthulhu = new Product('cthulhu', './images/cthulhu.jpg')
let $dogDuck = new Product('dog-duck', './images/dog-duck.jpg')
let $dragon = new Product('dragon', './images/dragon.jpg')
let $pen = new Product('pen', './images/pen.jpg')
let $petSweep = new Product('pet-sweep', './images/pet-sweep.jpg')
let $scissors = new Product('scissors', './images/scissors.jpg')
let $shark = new Product('shark', './images/shark.jpg')
let $sweep = new Product('sweep', './images/sweep.png')
let $tauntaun = new Product('tauntaun', './images/tauntaun.jpg')
let $unicorn = new Product('unicorn', './images/unicorn.jpg')
let $waterCan = new Product('water-can', './images/water-can.jpg')
let $wineGlass = new Product('wine-glass', './images/wine-glass.jpg')
let productName = [$bag, $banana, $bathroom, $boots, $breakfast, $bubblegum, $chair, $cthulhu, $dogDuck, $dragon, $pen, $petSweep, $scissors, $shark, $sweep,
    $tauntaun, $unicorn, $waterCan, $wineGlass]

function getRandomNumber() {
    return Math.floor(Math.random() * productName.length);
}

function renderImage() {
    let randomIndex1 = getRandomNumber();
    let randomIndex2 = getRandomNumber();
    let randomIndex3 = getRandomNumber();

    while (img1 === img2 || img3 === img1 || img2 === img3) {
        img3 = getRandomNumber();
    }
    img1.src = items.productName[randomIndex1].image;
    img2.src = items.productName[randomIndex2].image;
    img3.src = items.productName[randomIndex3].image;
    items.productName[randomIndex1].views++;
    items.productName[randomIndex2].views++;
    items.productName[randomIndex3].views++;
}