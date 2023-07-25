function enviar(){
var txtvel = document.querySelector('input#vel')
var res = document.querySelector('div#res')
var vel = Number(txtvel.value)
res.innerHTML = `A velocidade registrada foi de <strong>${vel} Km/h.</strong>`

    if (vel > 70){
        res.innerHTML = `Você foi Multado!`
    }

}