
let gerarTabuada = document.getElementById('gerarTab')

gerarTabuada.addEventListener('click', montarTabuada)

function montarTabuada(){

let menuSuspenso = document.querySelector('select')
let numTab = document.getElementById('numTab')
let numero = Number(numTab.value)

while(menuSuspenso.lastElementChild){
  menuSuspenso.removeChild(menuSuspenso.lastElementChild)
}

for(let i = 0; i<= 10; i++){
  let elemento = document.createElement('option')
  elemento.setAttribute('value', `x${i}`)
  elemento.innerText = `${numero} x ${i} = ${numero * i}`
  menuSuspenso.appendChild(elemento)
}

numTab.value = ""
numTab.focus()

}