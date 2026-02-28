const totalApples = 10;
let leftBasketApples = 0;
let rightBasketApples = totalApples - leftBasketApples;

const leftBasket = document.getElementById('left-basket-apples');
leftBasket.innerText = leftBasketApples;

const rightBasket = document.getElementById('right-basket-apples');
rightBasket.innerText = rightBasketApples;

const leftArrow = document.getElementById('left-arrow');
leftArrow.addEventListener('click', (e) => {
  if (rightBasketApples <= 0) {
    alert("Empty basket");
    return;
  }

  rightBasketApples--;
  leftBasketApples++;
  leftBasket.innerText = leftBasketApples;
  rightBasket.innerText = rightBasketApples;
});

const rightArrow = document.getElementById('right-arrow');
rightArrow.addEventListener('click', (e) => {
  if (leftBasketApples <= 0) {
    alert("Empty basket");
    return;
  }

  rightBasketApples++;
  leftBasketApples--;
  leftBasket.innerText = leftBasketApples;
  rightBasket.innerText = rightBasketApples;
});
