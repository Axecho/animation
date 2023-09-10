const option1 = document.getElementById('check1');
const option2 = document.getElementById('check2');
const option3 = document.getElementById('check3');
const totalCost = document.getElementById('cost');

option1.addEventListener("change", changePrice);
option2.addEventListener("change", changePrice);
option3.addEventListener("change", changePrice);

function changePrice()
{
  let newPrice = 0;
  
  if(option1.checked)
  {
    newPrice = 20;
  }

  else if(option2.checked)
  {
    newPrice = 50;
  }

  else if(option3.checked)
  {
    newPrice = 80;
  }

  totalCost.textContent = `Cost: ${newPrice}€`;
}

function subButton()
{
  let sub = document.getElementById('subby');

  if(sub.textContent === 'SUBSCRIBE')
  {
    sub.textContent = "SUBSCRIBED";
    sub.classList.add("js-sub");
  }
  else
  {
    sub.textContent = 'SUBSCRIBE';
    sub.classList.remove("js-sub");
  }
}






changePrice();