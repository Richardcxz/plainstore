if (!localStorage.getItem('cartTotal')) {
    localStorage.setItem('cartTotal', 0);
}

document.addEventListener("DOMContentLoaded", function () {
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

function prodDetail(x){
    if(x==1){
        window.location.href = 'pages/shirt.html';
    }
    else if(x==2){
        window.location.href = 'pages/shorts.html';
    }
    else if(x==3){
        window.location.href = 'pages/shoe.html';
    }
}