// const btn = document.querySelector('button');
// const txt = document.getElementById('txt');
// const img = document.getElementById('img');

// const array = [
//     ["Agora seria uma ótima hora para ficar com raiva Doutor!", "./assets/img/brucer.png"],
//     ["Esse é o meu segredo, estou sempre com raiva !", "./assets/img/hulk.png"],
//     ["Agora seria uma ótima hora para ficar com raiva Doutor!", "./assets/img/brucer.png"],
// ];


// btn.addEventListener('click', () => {
    
//     txt.innerText = `${array[1][0]}` 
//     img.src = `${array[1][1]}`

// });

// let cont = 0
// let img = document.querySelector("#imagem");
// const mudaImg = () => {
//     if (cont == 0){
//         img.setAttribute('assets', './img/hulk.png');
//         cont += 1
//     } else if (cont == 1){
//         img.setAttribute('assets', './img/brucer.png');
//         cont -= 1
//     }
// }

// var int = 2;
// var img = document.getElementById("img");
// function trocaImg(int){
//   if (int == 1)
//     {
//       img.src = "./assets/img/brucer.png";
//     }
//   else if (int == 2)
//     {
//       img.src = "./assets/img/hulk.png";
//     }
// }

var cont = 0
var img = document.querySelector("#image");

const mudaimage = () => {

  if (cont == 0) {
    img.setAttribute('assets', '/img/hulk.png');
    document.getElementById('txt').innerText = 'Agora seria uma ótima hora para ficar com raiva Doutor!' 
 
    cont += 1
  }
}







