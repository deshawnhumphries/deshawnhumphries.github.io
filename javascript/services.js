var js = document.querySelector("#html5_img");
js.addEventListener('click', HTML5Message, false);

var btn = document.querySelector("#btn");
btn.addEventListener("click", HTML5Message, false);

function HTML5Message () {
    alert('HTML5');
}