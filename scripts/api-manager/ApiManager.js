import { api_Id,api_key } from "../../settings/api.js"

export const getFoods = () =>
{
    return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${api_Id}&app_key=${api_key}`)
    .then(response => response.json())
}