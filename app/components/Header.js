export function Header() {
    const $header = document.createElement("header");
    $header.innerHTML = `
        <h1 class="title">Whiplash</h1>
        <video class="video" src="./app/assets/production ID 4125029.mp4" muted autoplay loop></video>
        <nav class="nav-bar">
            <a href="#/">Gallery</a>
            <a href="#/upload/"><i class="uil uil-image-upload"></i> Upload an image</a>
        </nav>
    `

    document.addEventListener("click", e => {
        if (!e.target.matches(".title")) return false;
        location.hash = "#/"
    })

    return $header;
}