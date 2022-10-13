const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(300)}, ${random(300)}, ${random(300)})`;
  document.body.style.backgroundColor = rndCol;
});

let myBtn=document.getElementById('buttonTwo');
let msg=document.getElementById('text');

myBtn.addEventListener('click', ()=>{
  msg.style.display='none';
})