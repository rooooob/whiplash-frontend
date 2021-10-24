export function Image(props) {
    let { title, image, id } = props;

    setTimeout(() => {
        let cont = document.querySelectorAll(".img-cont")
        cont.forEach(el => {
            el.addEventListener("mouseenter", e => {
                el.classList.add("active-img");
                el.parentElement.style.opacity = ".9";
            }) 

            el.addEventListener("mouseleave", e => {
                el.classList.remove("active-img");
                el.parentElement.style.opacity = "1";
            })
        })
    }, 100)


    return `
        <figure class="img-fig">
        <div class="img-div" style="background-image: url(${image})">
            <div class="img-cont">
                <div class="top">
                    <div class="top-el">
                        <i class="heart uil uil-heart"></i>
                        <p>${title}</p>
                    </div>
                </div>
                <div class="bottom">
                <i data-id="${id}" class="uil uil-trash-alt delete"></i>
                    <a href="" class="download" download="${image}"><i class="uil uil-image-download"></i></a>
                </div>
            </div>
        </div>
        </figure>
        `
    }
    
// <img class="r-img" src="${image}" alt="${title}">
// <p class="img-desc">${title}</p>