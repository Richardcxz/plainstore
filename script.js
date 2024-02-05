if (!localStorage.getItem('cartTotal')) {
    localStorage.setItem('cartTotal', 0);
    localStorage.setItem('shirt', 0);
    localStorage.setItem('shorts', 0);
    localStorage.setItem('shoe', 0);
}
else{
    document.getElementById("currentPrice").innerHTML = "$" + localStorage.getItem('cartTotal');
}

function updTotal(){
    document.getElementById("currentPrice").innerHTML = "$" + localStorage.getItem('cartTotal');
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("shirtCount").innerHTML = localStorage.getItem('shirt');
    document.getElementById("shortsCount").innerHTML = localStorage.getItem('shorts');
    document.getElementById("shoeCount").innerHTML = localStorage.getItem('shoe');
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('mouseover', function () {
            product.style.filter = 'invert(1)';
        });

        product.addEventListener('mouseout', function () {
            product.style.filter = 'invert(0)';
        });
    });
});

function checkout() {
    window.location.href = 'checkout.html';
}

function about(){
    window.location.href = 'about.html'
}


function cart(x) {
    let total = parseInt(localStorage.getItem('cartTotal')) || 0;
    let shirtCount = parseInt(localStorage.getItem('shirt')) || 0;
    let shortsCount = parseInt(localStorage.getItem('shorts')) || 0;
    let shoeCount = parseInt(localStorage.getItem('shoe')) || 0;

    if (x === "shirt") {
        total += 30;
        shirtCount++;
        localStorage.setItem('shirt', shirtCount);
    } else if (x === "shorts") {
        total += 20;
        shortsCount++;
        localStorage.setItem('shorts', shortsCount);
    } else if (x === "shoe") {
        total += 35;
        shoeCount++;
        localStorage.setItem('shoe', shoeCount);
    }

    localStorage.setItem('cartTotal', total);
    window.alert(`Added ${x} to your shopping cart!`);
    updTotal();
}


function prodDetail(x){
    if(x==1){
        window.location.href = 'shirt.html';
    }
    else if(x==2){
        window.location.href = 'shorts.html';
    }
    else if(x==3){
        window.location.href = 'shoe.html';
    }
}

function home(){
    window.location.href = 'index.html'
}