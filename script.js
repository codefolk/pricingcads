
    document.querySelector(".toggle").addEventListener("click", clickMe); 

function clickMe() {
  var price = document.querySelector("#pricing");
  price.textContent = "$199.99";
  var price2 = document.querySelector("#pricing2");
  price2.textContent = "$249.99";
  var price3 = document.querySelector("#pricing3");
  price3.textContent = "$399.99";
}

