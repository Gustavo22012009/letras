let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["bike", "moto", "carro", "aviao"];
  return random(palavras);
}

function inicializaCores(){
  background("pink");
  fill("red");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw () {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
   
 /* if (mouseX < 50){
    let palavra = "C";
  text(palavra, 200,200);
 } else if (mouseX < 100){
   let palavra = "Ch";
  text(palavra, 200,200);
 }  else  if (mouseX < 150){
    let palavra = "Cho";
  text(palavra, 200,200);
 }  else  if (mouseX < 200){
    let palavra = "Choc";
  text(palavra, 200,200);
 }  else  if (mouseX < 250){
    let palavra = "Choco";
  text(palavra, 200,200);
 }  */
}

