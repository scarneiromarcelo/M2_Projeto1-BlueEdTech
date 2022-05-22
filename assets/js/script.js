var cont = 1;
var img = document.querySelector("#image");

const mudaimage = () => {
  if (cont == 0) {
    imagem.setAttribute("src", "./assets/img/brucer.png");
    document.getElementById("txt").innerText =
      "Agora seria uma ótima hora para ficar com raiva Doutor!";

    cont += 1;
  } else if (cont == 1) {
    imagem.setAttribute("src", "./assets/img/hulk.png");
    document.getElementById("txt").innerText =
      "Esse é o meu segredo, estou sempre com raiva !";
    cont += 1;
  } else if (cont == 2) {
    imagem.setAttribute("src", "./assets/img/shehulk.png");
    document.getElementById("txt").innerText = "She Hulk !";
    cont += 1;
  } else if (cont == 3) {
    imagem.setAttribute("src", "./assets/img/hulk2.png");
    document.getElementById("txt").innerText = "Vamos Hulk me ajuda!";
    cont -= 3;
  }
};
