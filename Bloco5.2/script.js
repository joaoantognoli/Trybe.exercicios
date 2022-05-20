
       // 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;



       //let container = document.querySelector('#corpse');

       /* let newDiv = document.createElement("h1")

         let texto = document.createTextNode("Ole,Ole,Ole,Ole")

         newDiv.appendChild(texto);

       newDiv.className = "main-content center-content"

       container.appendChild(newDiv); */







       
    
//2 Adicione a tag main com a classe main-content como filho da tag body;

  let princ = document.querySelector("#corpse");

  let newDiv = document.createElement("main")

  let text = document.createTextNode ("Exercicio 2")

  newDiv.appendChild(text)

  newDiv.className = "main-content"

  princ.appendChild(newDiv);



//3Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let princi = document.querySelector("main");
let newSection = document.createElement ("section");
let texct = document.createTextNode("exercicio 3")

newSection.className = "center-content";

newSection.appendChild(texct)
princi.appendChild(newSection);




//4Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let papa = document.querySelector("section");
let fio = document.createElement("p")
let textu = document.createTextNode("Exercicio 4 ");

papa.appendChild(fio);
fio.appendChild(textu);


//5Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let mein = document.querySelector("main")
let newSek = document.createElement("section");
let contet = document.createTextNode("Exercicio 5")
newSek.className = "left-content";
newSek.id="secao5"
newSek.appendChild(contet);
mein.appendChild(newSek);

//6Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let mein2 = document.querySelector("main")
let newSek2 = document.createElement("section");
let contet2 = document.createTextNode("Exercicio 6")
newSek2.className = "right-content";
newSek2.appendChild(contet2);
mein2.appendChild(newSek2);

//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;



//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;



//9 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
    
   