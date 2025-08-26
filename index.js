var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaDireita = window.document.getElementById("setaDireita")
var SetaEsquerda = window.document.getElementById("setaEsquerda")

function PassarParaDireita(){
    Leonardo.style ="display:none"
    Samantha.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex"
}
function PassarParaEsquerda(){
    Samantha.style ="display:none"
    Leonardo.style ="display:flex"
    SetaDireita.style ="display:flex"
    SetaEsquerda.style ="display:none"
}