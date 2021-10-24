import { Header } from "./components/Header.js";
import { ImageSection } from "./components/ImageSection.js";
import { Router } from "./components/Router.js";

export function App() {
    const $main = document.getElementById("root");

    $main.innerHTML = null;
    $main.appendChild(Header());    
    $main.appendChild(ImageSection());

    Router();
}