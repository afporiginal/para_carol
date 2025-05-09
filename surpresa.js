const carta = document.getElementById("carta");

const texto = `
Minha Carol,

Você já se perguntou como seria o universo se eu nunca tivesse te encontrado?

Eu já.

E, sinceramente... ele seria mais vazio, menos bonito, menos vivo.

Desde o momento em que te conheci, tudo pareceu fazer sentido. 
As estrelas ganharam significado, os dias ficaram mais leves, 
e até o silêncio se tornou confortável quando você está por perto.

Essa jornada é só o começo.
Eu quero escrever milhares de páginas com você.

Com todo o meu amor,

(seu nome aqui)
`;

let i = 0;

function escreverCarta() {
  if (i < texto.length) {
    carta.textContent += texto.charAt(i);
    i++;
    setTimeout(escreverCarta, 40);
  }
}

window.onload = escreverCarta;
