function enviar(){
var txtvel = document.querySelector('input#vel')
var res = document.querySelector('div#res')
var situ = document.querySelector('div#situ')
var vel = Number(txtvel.value)

if (vel > 70){
    
        res.innerHTML = `A velocidade registrada foi de <strong>${vel} Km/h.</strong>`
        situ.innerHTML = `Você foi <strong>Multado!</strong>`

    } else if (vel < 10) {
    
        window.alert("[ERRO] Insira um valor válido.")
        res.innerHTML = `Insira um valor válido!`

    } else {

        res.innerHTML = `A velocidade registrada foi de <strong>${vel} Km/h.</strong>`
        situ.innerHTML = `Você está trafegando dentro do limite, tenha uma boa viagem!`

    }

        
     

   

}