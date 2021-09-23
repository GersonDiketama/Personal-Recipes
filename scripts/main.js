import { getFoods } from "./api-manager/ApiManager.js";
import { loops } from "./Data-Info/InfoLoops.js";
import { searchBar } from "./Data-Info/HtmlDisplays.js";

document.querySelector('nav').innerHTML = searchBar()
const loop = () =>
{
    getFoods()
    .then(data =>
        {
            let datas = data.hits
            let html;
            console.log(data)
            document.querySelector(".show").innerHTML += loops(datas)
        }
        )
}

loop()