function enviar(){
    var txtname = document.querySelector('input#nome')
    var txtage = document.querySelector('input#age')
    var age = Number(txtage.value)
    var name = String(txtname.value)
    var res = document.querySelector('div#res')
    var dname = document.querySelector('div#name')
    dname.innerHTML = `Tudo certo <strong>${name}</strong> vamos ver sua situação:`
    
    if (age < 16){
        res.innerHTML = `Com ${age} anos você <strong>não vota!</strong>`
    } else if (age < 18 || age > 70){
        res.innerHTML = `Com ${age} anos o voto é <strong>facultativo!</strong>`
    }  else {
        res.innerHTML = `Com ${age} anos o voto é <strong>obrigatório!</strong>`
    }
    
}