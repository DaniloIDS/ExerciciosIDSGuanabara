
const btnAdd = document.querySelector('#btnAdd')
const btnFinalizar = document.querySelector('#btnFinalizar')

btnAdd.addEventListener('click', adicionarNum)
btnFinalizar.addEventListener('click', finalizarValores)

let resultado = document.getElementById('resultado')

const vetor = []

function adicionarNum(){


  let elementNum = document.getElementById('num')
  let lista = document.getElementById('numTab')
  let item = document.createElement('option')

  let num = Number(elementNum.value)

  if (num < 1 || num > 100){
    alert('Digite um valor dentro do intervalo estabelecido!')
    return
  }

  while (lista.lastElementChild && vetor.length == 0){
    lista.removeChild(lista.lastElementChild)
  }

  if (vetor.indexOf(num) == -1){
    resultado.innerHTML = ""
    vetor.push(num)
    item.innerText = `O valor ${num} foi adicionado`
    lista.appendChild(item)
    elementNum.value = ""
    elementNum.focus()
    } else {
    alert('Este número já foi adicionado')
  }

}

function finalizarValores(){
  
  let somaVetor = 0

  if (vetor.length == 0 ){
    alert('Adicione ao menos um número para continuar')
    return
  }

  for(let elemento in vetor){
    somaVetor += Number(vetor[elemento])
  }

  vetor.sort()

  resultado.innerHTML = ""

  resultado.innerHTML += `Ao todo, temos ${vetor.length} números adicionados. <br>`

  resultado.innerHTML += `O <strong>maior</strong> número informado é ${vetor[vetor.length - 1]}. <br>`

  resultado.innerHTML += `O <strong>menor</strong> número informado é ${vetor[0]}. <br>`

  resultado.innerHTML += `O resultado da <strong>soma</strong> de todos os valores é ${somaVetor.toFixed(2)} <br>`

  resultado.innerHTML += `A média de todos os valores é ${Number(somaVetor / vetor.length).toFixed(2)}`

}