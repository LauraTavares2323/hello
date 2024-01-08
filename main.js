let botao = document.getElementById("botao")
let caixa = document.getElementById("caixa")
let fechar = document.getElementById("fechar")

botao.addEventListener("click", (e) => {
    caixa.style.visibility = "visible" 
})

fechar.addEventListener("click", (e) =>{
    caixa.style.visibility = "hidden"
})