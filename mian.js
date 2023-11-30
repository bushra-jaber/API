var httpRequest = new XMLHttpRequest();

var result = [];

function getNews(query){
    httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    httpRequest.send();
    httpRequest.onreadystatechange =function(){ 
    if(httpRequest.readyState==4){
   result =JSON.parse(httpRequest.response).recipes;
   displayData();
    }
}
}


function displayData(){
    var data="";

    for(var i=0;i<result.length; i++){
        data+=`
    
    <div class="col-lg-3 mt-5">
     <div class="recipe ">
     <h1  >${result[i].publisher =='[Removed]'?'test publisher' :result[i].publisher}</h1>
     <h2>${result[i].title =='[Removed]'?'test title' :result[i].title}</h2>
    <img src="${result[i].image_url==null?'shawerma.jpg': result[i].image_url} "class="img-fluid"/>
    <a href="det.html?rId=${result[i].recipe_id}"> Read More</a>
    
    
    
    </div> </div>
    `;
    }
    document.getElementById("postSection").innerHTML=data;
}
    
    
    
    var allLinks=document.querySelectorAll(".nav-link"); 
    for(var i=0; i<allLinks.length;i++){
    
    allLinks[i].addEventListener('click',function(e){
    
    getNews(e.target.innerHTML);
    })
}
getNews("pizza")
