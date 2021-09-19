import { getFoods } from "./api-manager/ApiManager.js";
import { receive_Info } from "./Data-Info/infoList.js";

const loop = () =>
{
    getFoods()
    .then(data =>
        {
            let datas = data.hits
            let html;

            for(const info of datas)
            {
                html+= receive_Info(info)
            }
            document.querySelector(".show").innerHTML += html
        }
        )
}

loop()