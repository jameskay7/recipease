const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const containerDiv = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '649269d4'
const APP_key = 'b66da32bd4da06f03785acc7bc54cc61';
const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
})

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}`;
    const response = await fetch(baseURL)
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data)

}
function generateHTML(results){
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += 
        
        
        `<div class="item">
             <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="viewbutton" href="${result.recipe.url}">View Recipe</a>
            </div>
            <p class="food-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            <p class="item-data">Diet label: ${result.recipe.dietLabels}</p>
            <p class="item-data">Health label: ${result.recipe.healthLabels}</p>
    </div>
        `
    })
    searchResultDiv.innerHTML = generatedHTML
}