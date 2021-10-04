"use strict";

const imagens = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg",
    "./img/img7.jpg",
    "./img/img8.jpg",
]

const pegarId = (url) => {
    const posBarra = url.lastIndexOf("/") + 1
    const posPonto = url.lastIndexOf(".")
    return url.substring(posBarra, posPonto)
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${pegarId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
   
           //Jeito errado 
     //  container.innerHTML += `
     //     <a href="#img1" class="galeria-itens">
     //     <img src="${urlImagem}" alt="">
     //  </a>
     // `


}
 const carregarGaleria = (imgs) => imgs.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = pegarId(urlImagem)

   const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1
   const idAnterior = pegarId(arr[indiceAnterior])

   const indiceProximo = indice >= arr.length - 1 ? 0 : indice + 1
   const idProximo = pegarId(arr[indiceProximo])


    novaDiv.innerHTML = `
        <div class="imagem-container">
                 <a href="#" class="fechar">&#128473;</a>
                 <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
                 <img src="${urlImagem}" alt="">
                 <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
             </div>
         </div>
    `
    container.appendChild(novaDiv)
}
const carregarSlide = (imgs) => imgs.forEach(criarSlide)

// const carregarGaleria = (imgs) => imgs.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)