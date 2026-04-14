// ESPERA O SITE CARREGAR
document.addEventListener("DOMContentLoaded", function(){

  const searchInput = document.getElementById("search");
  const products = document.querySelectorAll(".produto-card");

  // 🔍 FUNÇÃO DE BUSCA
  window.searchProducts = function(){
    let input = searchInput.value.toLowerCase();

    products.forEach(card=>{
      let name = card.querySelector("h3").textContent.toLowerCase();

      if(name.includes(input)){
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  // 📂 FILTRO DE CATEGORIA
  window.filterCategory = function(category){
    products.forEach(card=>{
      let cat = card.getAttribute("data-category");

      if(category === "todos" || cat === category){
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  // ⌨️ ENTER PRA PESQUISAR
  searchInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      searchProducts();
    }
  });

});
