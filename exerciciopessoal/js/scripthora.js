function enviar(){
    var hora = new Date()
    var time = hora.getHours() 
    var minutes = hora.getMinutes()
    var dhora = document.querySelector('div#hora')
    var msg = document.querySelector('div#msg')

    dhora.innerHTML = `Agora são ${time} horas e ${minutes} minutos`

    if (time < 18){
        msg.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#a07134'
    } else if (time < 24){
        msg.innerHTML = 'Boa Noite!'
        document.body.style.background = '#3a3a3a'
    } if(time < 12){
        msg.innerHTML = 'Bom Dia!'
        document.body.style.background = '#dad48a'
    }

    
    
}