const title = document.querySelector("#title");

const CLICKED_CALSS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CALSS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();


