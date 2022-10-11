

let greetings = document.querySelector('p');
document.querySelector('input').addEventListener("keyup", captureInput)
function captureInput(e){
 greetings.innerText = (`Hello ${e.target.value}, welcome to my website.`)
}