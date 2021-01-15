var botao = document.querySelector(`body`)
botao.style.color = `#E0FFFF`

var a = document.getElementById(`botao`)

a.addEventListener(`click`, clicar)
a.addEventListener(`mouseenter`,entrar)
a.addEventListener(`mouseout`, sair)

function clicar () {
    a.innerText= `clicou`
    a.style.background = `black`}

function entrar () {
    a.innerText = `entrou`}

function sair () {
    a.innerText = `saiu`} 

function somar () {
    var tn1 = document.getElementById ('txtn1')
    var tn2 = document.getElementById ('txtn2')
    var res = document.getElementById ('res')
    var n1 = Number(`${tn1.value}`)
    var n2 = Number(`${tn2.value}`)
    var r = n1 + n2
    res.innerHTML = `a soma entre ${n1} e ${n2} é igual a ${r}`
    }



