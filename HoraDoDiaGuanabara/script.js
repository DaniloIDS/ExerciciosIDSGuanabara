
function carregar(){
  let msg = document.getElementById('msg')
  let foto = document.getElementById('foto')
  let data = new Date()
  //let hora = data.getHours()
  let minutos = data.getMinutes()

  let hora = 2
  let saudacao = ''

  if (hora >= 0 && hora <12){
    saudacao = "Bom dia!" 
    foto.src = 'manha.jpg'
    document.body.style.background = '#e5e575'

  } else if (hora < 18){
    saudacao = "Boa tarde!"
    foto.src = 'tarde.jpg'
    document.body.style.background = '#ffc552'
  } else {
    saudacao = "Boa noite!"
    foto.src = 'noite.jpg'
  }

  msg.innerHTML = `${saudacao} Agora são ${hora}:${minutos}h.`

}