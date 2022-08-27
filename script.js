document.querySelector(".toggle").onclick = function(){

if (document.querySelector(".toggle").checked == true){
  let price = document.querySelector("#pricing");
  price.textContent = "$199.99";
  let price2 = document.querySelector("#pricing2");
  price2.textContent = "$249.99";
  let price3 = document.querySelector("#pricing3");
  price3.textContent = "$399.99";
}
else{
  let price = document.querySelector("#pricing");
  price.textContent = "$19.99";
  let price2 = document.querySelector("#pricing2");
  price2.textContent = "$24.99";
  let price3 = document.querySelector("#pricing3");
  price3.textContent = "$39.99";
}
}
