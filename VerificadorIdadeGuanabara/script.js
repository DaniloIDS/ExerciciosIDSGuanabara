function verificar(){
  let dataNasc = document.getElementById('nasc')
  let sexoMasc = document.getElementById('masc')
  let sexoFem = document.getElementById('fem')
  let res = document.querySelector('div#res')

  let data = new Date();
  let ano = data.getFullYear()

  // console.log(sexoMasc.checked) 
  // console.log(sexoFem.checked)
  // console.log(data)

  if (dataNasc.value.length == 0 || dataNasc.value > ano) {
    alert('Verifique os dados e tente novamente')
  } else {
    let idade = ano - dataNasc.value
    
    let genero = '' 
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(sexoMasc.checked){

      genero = 'Homem'

      if (idade < 12 ){
        img.setAttribute('src', 'homem-crianca.jpg')
      } else if (idade < 21 ) {
        img.setAttribute('src', 'homem-jovem.jpg')
      } else if (idade < 45) {
        img.setAttribute('src', 'homem-adulto.jpg')
      } else {
        img.setAttribute('src', 'homem-idoso.jpg')
      }

    } else if (sexoFem.checked){
      genero = 'Mulher'

            if (idade < 12 ){
        img.setAttribute('src', 'mulher-crianca.jpg')
      } else if (idade < 21 ) {
        img.setAttribute('src', 'mulher-jovem.jpg')
      } else if (idade < 45) {
        img.setAttribute('src', 'mulher-adulta.jpg')
      } else {
        img.setAttribute('src', 'mulher-idosa.jpg')
      }

    }

    res.style.textAlign = 'center'
    res.innerHTML = `${genero} de ${idade} anos`
    res.appendChild(img)

  }


}