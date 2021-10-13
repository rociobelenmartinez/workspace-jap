let productosCarrito=[];




/*completa la función para actualizar el subtotal del producto al modificar la cantidad del mismo*/
function updateProductoSubtotal(count,unitCost,id,currency) {
let subTotalProd = count*unitCost;
document.getElementById("subTotal"+id).innerHTML = currency + subTotalProd;

}

function showCarrito(){

    /*mostrar los productos del carrito con el input correspondiente a la cantidad*/
    let htmlToAppend = "";
    let i = 0; 
    for(let article of productosCarrito){
        
        htmlToAppend += `
        <tr>
        <td><img src="${article.src}" class = "img-fluid" style ="max-width:50px!important"></td>
        <td class="align-middle">${article.name}</td>
        <td class="align-middle">${article.currency} ${article.unitCost}</td>
        <td class="align-middle"><input type="number" min ="1" value=${article.count} id="${i}" onchange="updateProductoSubtotal(this.value,${article.unitCost},${i},'${article.currency}')"></td>
        <td class="align-middle"id="subTotal${i}">${article.currency} ${article.count*article.unitCost}</td>
        
        </tr>`
       i++;                  
                       
       
    }
    document.getElementById("carrito").innerHTML = htmlToAppend;


}

function getCarrito(url){
    
    return fetch(url)
    .then(respuesta=>{
        return respuesta.json();
    })
    
}

document.addEventListener("DOMContentLoaded", function(e){
getCarrito("https://japdevdep.github.io/ecommerce-api/cart/987.json")
    .then(respuesta=>{
        productosCarrito = respuesta.articles;
        showCarrito();
        console.log(productosCarrito);
    })
})