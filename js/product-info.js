var product = {};

function showProdImages(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImages").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productCategoryHTML = document.getElementById("productCategory");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost + product.currency;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showProdImages(product.images);
        }
    });
});
//Funcion de mostrar ocmentarios
var jsonComments = [];

function showProductsJsonComments(){

    let htmlContentToAppend = "";
    for(let i = 0; i < jsonComments.length; i++){
        let comment = jsonComments[i];



            htmlContentToAppend += `
            
                <div class="row">

                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ comment.user +`</h4>
                            
                        </div>
                        <p class="mb-1">` + comment.description + `</p>
                        <div> 
                    
                        <p class="mb-1">` + "puntuación:" + " " + comment.score +`</p>
                        </div>
                        
                        <div> 
                        <p class="mb-1">`+ comment.dateTime +`</p>
                        </div>


                    </div>

                </div>
            
            `
        }

        document.getElementById("productJsonComments").innerHTML = htmlContentToAppend;
    }



    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){

                jsonComments = resultObj.data; 
                showProductsJsonComments(jsonComments);
            }
        });
        
    });