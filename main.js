console.log("hello world");
// like et dislike
var tableauIconlikes = document.getElementsByClassName("heartlike");
var shoppingcart = document.querySelector("cartshopping");

for (let index = 0; index < tableauIconlikes.length; index++) {
  const iconheartlike = tableauIconlikes[index];
  iconheartlike.addEventListener("click", function () {
    iconheartlike.classList.toggle("active");
  });
}
// incrementation,decrementation, suppression produit et somme total
var totalprixpanier = 0;
var spantotalprixpanier = document.getElementById("totalprixpanier");
var tableaucards = document.getElementsByClassName("card");
for (let i = 0; i < tableaucards.length; i++) {
  // element
  const card = tableaucards[i];
  let btnmanus = card.children[1].children[3].children[0].children[2];
  let btnminus = card.children[1].children[3].children[0].children[0];
  let spanqty = card.children[1].children[3].children[0].children[1];
  let totalunit = card.children[1].children[2].children[1];
  let prixunit = card.children[1].children[1].children[1];
  const btnTrash = card.children[1].children[3].children[2];
  let price = parseInt(prixunit.textContent);

  let qty = parseInt(spanqty.textContent);
  btnmanus.addEventListener("click", function () {
    qty++;
    spanqty.innerText = qty;
    totalunit.innerText = qty * price;
    totalprixpanier = totalprixpanier + price;
    spantotalprixpanier.innerText = totalprixpanier;
  });
  btnminus.addEventListener("click", function () {
    if (qty != 0) {
      qty--;
      spanqty.innerText = qty;
      totalunit.innerText = qty * price;
      totalprixpanier = totalprixpanier - price;
      spantotalprixpanier.innerText = totalprixpanier;
    }
  });
  btnTrash.addEventListener("click", function () {
    card.remove();
  });
}
