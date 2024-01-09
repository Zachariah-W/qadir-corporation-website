let priceSum = 0;

function product1cat1(clickedButton) {
    let detailPricingElement = clickedButton.querySelector('.detail-pricing');
    let detailPricing = parseInt(detailPricingElement.textContent);
    let totalPrice = document.querySelector('.price-total-div p');
    let plusMinusElement = clickedButton.querySelector('.plus-minus-price');

    if (clickedButton.classList.contains('selected')) {
        clickedButton.classList.remove('selected');
        priceSum -= detailPricing;
    } else {
        clickedButton.classList.add('selected');
        priceSum += detailPricing;
    }

    if (clickedButton.classList.contains('selected')) {
        plusMinusElement.textContent = '-';
        clickedButton.style.borderColor = 'blue';
        clickedButton.style.transform = 'scale(1.02)';
        clickedButton.style.boxShadow = '8px 8px 4px lightgray';
    } else {
        plusMinusElement.textContent = '+';
        clickedButton.style.borderColor = 'black';
        clickedButton.style.transform = 'scale(1)';
        clickedButton.style.boxShadow = 'none';
    }

    totalPrice.textContent = "Total Price: " + priceSum;
}

function fullSizeSlideShow() {
    let x = document.querySelector('.slide-show-container');
    if (x.requestFullscreen) {
        x.requestFullscreen();
    } else if (x.mozRequestFullScreen) {
        x.mozRequestFullScreen();
    } else if (x.webkitRequestFullscreen) {
        x.webkitRequestFullscreen();
    } else if (x.msRequestFullscreen) {
        x.msRequestFullscreen();
    }
}



function fullSizeSlideShow() {
    let x = document.querySelector('.slide-show-container');
    if (x.requestFullscreen) {
      x.requestFullscreen();
    } else if (x.mozRequestFullScreen) {
      x.mozRequestFullScreen();
    } else if (x.webkitRequestFullscreen) {
      x.webkitRequestFullscreen();
    } else if (x.msRequestFullscreen) {
      x.msRequestFullscreen();
    }
}