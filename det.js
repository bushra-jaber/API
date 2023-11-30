
 var queryParams = new URLSearchParams(window.location.search);
 var id = queryParams.get('rId');
 var httpRequest = new XMLHttpRequest();
 var post = [];
 
 httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
 httpRequest.send();
 httpRequest.onreadystatechange = function(){
     if (httpRequest.readyState == 4){
         post = JSON.parse(httpRequest.response);
        
         PrintData();
     }
 }
 
 function PrintData() {
     var value;
     var dataa = [];
     for (var i = 0; i < post.recipe.ingredients.length; i++) {
         dataa += `<li>${post.recipe.ingredients[i]}</li>`;
     }
     value = `
     
     
         <div class="col-md-6">
             <img src="${post.recipe.image_url}" alt="food" class = "img-fluid">
             <h1 >${post.recipe.title}</h1>
             <h3>${post.recipe.social_rank}</h3>
             <h3>${post.recipe.publisher}</h3>
             <div>
                 <h3>Ingredients</h3>
                 <ul class="ps-5">${dataa}</ul>
             </div>
         
     </div>`;
     document.getElementById(`details`).innerHTML = value;
 }
    
    
    