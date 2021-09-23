import { receive_Info } from "./infoList.js";

export const loops = (data) =>
{
    let HTMLResponse;
    for(const allInfo of data)
    {
        HTMLResponse+=receive_Info(allInfo)
    }
    return HTMLResponse
}