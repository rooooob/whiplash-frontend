import { Image } from "./Image.js";
import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api_endpoints.js";
import { UploadSection } from "./UploadSection.js";

export async function Router() {
    const $main = document.getElementById("root"),
        $imgSect = document.getElementById("img-sect");
    
    document.addEventListener("click", e => {
        if (!e.target.matches(".delete")) return false;

        let choice = confirm("Are you suere you want to delete this picture?");
        
        if (choice) {
            ajax({
                url: `${api.DELETE}${e.target.dataset.id}`,
                method: "DELETE",
                pars: {},
                cbSuccess: data => {
                    location.reload();
                }
            })
        }
    })

    if (location.hash === "#/" || !location.hash) {
        await ajax({
            url: api.ALL,
            method: "GET",
            pars: {},
            cbSuccess: data => {
                let html = "";
                data.forEach(el => {
                    html += Image(el);
                });
                $imgSect.innerHTML = html;
            }
        })
    }

    if (location.hash === "#/upload/") {
        $imgSect.appendChild(UploadSection());
    }
}