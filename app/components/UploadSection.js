import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api_endpoints.js";

export function UploadSection() {
    const $upload = document.createElement("section");
    $upload.classList.add("upload");

    $upload.addEventListener("dragover", e => {
        e.preventDefault();
        e.stopPropagation();
        $upload.classList.add("drag-active");
    })

    $upload.addEventListener("dragleave", e => {
        e.preventDefault();
        e.stopPropagation();
        $upload.classList.remove("drag-active");
    })

    $upload.addEventListener("drop", e => {
        e.preventDefault();
        e.stopPropagation();
        $upload.classList.remove("drag-active");

        const files = Array.from(e.dataTransfer.files);
        // console.log(file[0]);
        files.forEach(async file => {
            if (!file.type.includes("image")) {
                alert("Please only upload images :)");
            } else {
                console.log(file);

                try {
                    let data = new FormData();
                    data.append("title", file.name);
                    data.append("image", file)

                    let args = {
                        method: "POST",
                        body: data
                    };
                    const response = await fetch(api.POST, args),
                        json = await response.json();
        
                    if (!response.ok) throw {status: response.status, statusText: response.statusText};

                    // console.log(json);
                } catch (err) {
                    let errMessage = `Error: ${err.status}. ${err.statusText}`;
                    console.log(errMessage);
                }
            }
        })
    })
    $upload.innerHTML = `
        <div class="main-info">
            <img src="/app/assets/placeholder.png" alt="placeholder">
            <p class="upload-info">Drag and drop your images</p>
        </div>
        <div class="cond-info">
            <ul>
                <li>Only upload photos you own the rights to</li>
                <li>Zero tolerance for nudity, violence or hate</li>
            </ul>
        </div>

    `
    return $upload;
}