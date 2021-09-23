export const receive_Info = (data) =>
{
    return `
            <div>

            <div>
            <h2>${data.recipe.label}</h2>
            <img src="${data.recipe.image}">
            </div>

            <div class = "food-nutri-info">

            </div>   

            </div>

            <div  class = "ingredients">
            <h3>Ingredients</h3>
            <p>${data.recipe.ingredientLines}</p>
            </div>
    `
}