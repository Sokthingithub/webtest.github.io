
const productbox = document.querySelector(".main").children;

function changeImage(event){

    document.querySelector(".pro-box").src = event.children[0].src

    for(let i = 0; i < productbox.length; i++){

        productbox[i].classList.remove("active");
    }
    event.classList.add("active");
}