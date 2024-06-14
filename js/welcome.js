var row=document.querySelector('.row')
var currentName=JSON.parse(localStorage.getItem('name'));

console.log(currentName);

var container=`<h1 class="text-white">Welcome ${currentName}</h1>`;
    navBarText.innerHTML=container;



async function getEat() {
    
    var reponse= await fetch('https://forkify-api.herokuapp.com/api/search?q=apple');


    var data = await reponse.json();
    console.log(data);

    var recipes= data.recipes;

   
    displayData(recipes);



}    

getEat();


function displayData(list) {
    
    var container=``;

    for (var i = 0; i < list.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3">
          <div class="inner text-center text-white my-3">
            <div class="inner-img">
              <img src="${list[i].image_url} " class="w-100" alt="omlm" />
            </div>
            <p class="p-3">${list[i].title}</p>
          </div>
        </div>`
        
    }

    row.innerHTML=container;


}