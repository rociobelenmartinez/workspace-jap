const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
// this function is for print the name in the nav bar
function printName(){
  let user =localStorage.getItem("username");
  if(user!=undefined && user!=""){
    document.getElementById("usernav").innerHTML = user;
  }
  else{
    window.location.href = "index.html"
  }
}

//This function is for clean the localStorage for logout
function logOut(){
    alert('Cerrar sesion');
    localStorage.removeItem('username');
    window.location.href = "index.html";
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
printName();
});

function peticion(url){
  let resultado={};
  return fetch(url)
  .then(resp=>{
      if(resp.ok){
          return resp.json();
      }
      else{
          throw Error(resp.statusText);
      }
  })
  .then(json=>{
      resultado.estado = "ok";
      resultado.datos= json;
      return resultado;
  })
  .catch(error=>{
      resultado.estado = "error";
      resultado.datos = error;
      return resultado;
  })
}