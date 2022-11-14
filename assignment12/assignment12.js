const num = document.getElementById('number');
const btn = document.getElementById('generate');
const randomNum = () => {
    return Math.floor(Math.random() * 9999999999);
  };
  btn.addEventListener('click', () => {
});
btn.addEventListener('click', () => {
    num.innerHTML = randomNum(); 
  });

  function revealMessage() {
    alert("No?? Then change it or try again");
}

function showMessage() {
    alert("Nice.");
}