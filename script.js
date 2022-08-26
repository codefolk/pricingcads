document.querySelector(".toggle").onclick = function(){

if (document.querySelector(".toggle").checked == true){
  var price = document.querySelector("#pricing");
  price.textContent = "$199.99";
  var price2 = document.querySelector("#pricing2");
  price2.textContent = "$249.99";
  var price3 = document.querySelector("#pricing3");
  price3.textContent = "$399.99";
}
else{
  var price = document.querySelector("#pricing");
  price.textContent = "$19.99";
  var price2 = document.querySelector("#pricing2");
  price2.textContent = "$24.99";
  var price3 = document.querySelector("#pricing3");
  price3.textContent = "$39.99";
}
}

