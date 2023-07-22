function horas(){
    var msg = document.querySelector('div#hora')
    var img = document.querySelector('div#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 4 && hora < 19) {
        imagem.src = 'dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 20) {
        imagem.src = 'noite.png'
        document.body.style.background = '#322c42'
    }



}
