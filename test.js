'use strict'

let imgContainer = document.getElementById('image-container')
let viewButton = document.getElementById('viewButton')
let img1 = document.getElementById('img-one')
let img2 = document.getElementById('img-two')
let img3 = document.getElementById('img-three')
function patDuck() {

}

const items = {
    productName: [],
}

let allProducts = [];
// setting the amount of clicks
let clicks = 0;
let maxClicks = 25;

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
items.productName.push($bag, $banana, $bathroom, $boots, $breakfast, $bubblegum, $chair, $cthulhu, $dogDuck, $dragon, $pen, $petSweep, $scissors, $shark, $sweep,
    $tauntaun, $unicorn, $waterCan, $wineGlass);
// Creating an algorithm that will generate the images for the browser window.
function getRandomNumber() {
    return Math.floor(Math.random() * items.productName.length);
}
// Randomly picks images for img1-img3
function renderImage() {
    let randomIndex1 = getRandomNumber();
    let randomIndex2 = getRandomNumber();
    let randomIndex3 = getRandomNumber();
    // keeps images from appearing the same
    while (randomIndex1 === randomIndex2 || randomIndex3 === randomIndex1 || randomIndex2 === randomIndex3) {
        randomIndex1 = getRandomNumber();
        randomIndex2 = getRandomNumber();
        randomIndex3 = getRandomNumber();
    }
    img1.src = items.productName[randomIndex1].image;
    img2.src = items.productName[randomIndex2].image;
    img3.src = items.productName[randomIndex3].image;
    items.productName[randomIndex1].views++;
    items.productName[randomIndex2].views++;
    items.productName[randomIndex3].views++;

}
// an event listener for the imgContainer in html
function duckClick(e) {
    if (e.target === imgContainer) {
        alert('Please click the image.');
    }
    clicks++;
    let patDuck = e.target.getAttribute('src');
    for (let i = 0; i < items.productName.length; i++) {
        // console.log(patDuck, items.productName[i].image)
        if (patDuck === items.productName[i].image) {
            items.productName[i].clicks++;
            break;
        }
    }
    if (clicks === maxClicks) {
        imgContainer.removeEventListener('click', duckClick);
        viewButton.className = 'clicks-permitted';
        imgContainer.className = 'no-voting';
    } else {
        renderImage();
    }
}
// Results for the loops
function showResults() {
    var ctx = document.getElementById("chart");
    const data = items.productName
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(row => row.name),
            datasets: [
                {
                    label: 'Votes per product',
                    data: data.map(row => row.clicks)
                },
                {
                    label: 'Votes per Views',
                    data: data.map(row => row.views)
                }
            ]
        }
    });
}

renderImage();

imgContainer.addEventListener('click', duckClick);
// img1.addEventListener('click', duckClick)
// img2.addEventListener('click', duckClick)
// img3.addEventListener('click', duckClick)


// a function that displays the results from the div
function displayResults(productsArray) {
    // i need an empty array for the clicks to store the data for the chart
    let timesDuckClicked = [];
    for (let i = 0; i < allProducts.length; i++) {
        timesDuckClicked.push(allProducts[i].duckClick);
    }
    // Making a chart to display the results
    // chartTime
    // need the results from the html
    // the length of the productsArray
    for (let i = 0; i < productsArray.length; i++) {
        // setting a variable to represent every single item in the array
        let product = productsArray[i];
        // rendering the results on the screen
        let resultMessage = `${product.name.charAt(0).toUpperCase() + product.name.slice(1)} was shown ${product.views} times and clicked ${product.duckClick} times! You can find ${product.name.charAt(0).toUpperCase() + product.name.slice(1)} at: ${product.image}.`;
        // create element to print the results on the page
        let resultsP = document.createElement('p');
        // adding new element to results container div in html
        viewButton.append(resultsP);
        // print message everyTime there's a new item 
        resultsP.textContent = resultMessage;
    }
    // I need to store my results in a local storage so i can access it if the page is refreshed
    // all data needed in my chart
    // creating a loop for the allProducts array
}

// actively listening to events
// listener for img-container, when any img is clicked, generates new pics from all items in renderImage()

imgContainer.addEventListener('click', function () {
    for (let i = 0; i < renderImage.length; i++) {
        getRandomNumber(renderImage[i]);
    };
    patDuck();
});
viewButton.addEventListener('click', function () {
    showResults();
    let itemsString = JSON.stringify(items)
    localStorage.setItem("items", itemsString)
});


