


btnCalc.addEventListener('click', contar)

function contar(){

btnCalc = document.getElementById('btnCalc')
cInicial = document.getElementById('contInicial')
cFinal = document.getElementById('contFinal')
step = document.getElementById('contStep')
resultado = document.getElementById('resultado')
resultado.innerHTML = ""

  if (cInicial.value == "" || cFinal.value == ""){
    alert('Preencha os campos corretamente')
    return
  } else if (step.value == "" || step.value == 0){
    step.value = 1
  }

  for(let i = Number(cInicial.value); i<= Number(cFinal.value); i = i + Number(step.value)){
    i + Number(step.value) > cFinal.value ? 
    resultado.innerHTML += i + "&#x1F6A9;" :
    resultado.innerHTML += i + "&#x27A1;"    
  }

  cInicial.value = ""
  cFinal.value = ""
  step.value = ""
  cInicial.focus()
}