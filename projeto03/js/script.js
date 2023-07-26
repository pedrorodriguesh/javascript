function contar(){
    var txtini = document.querySelector('input#inicio')
    var txtfim = document.querySelector('input#test')
    var txtpasso = document.querySelector('input#passo')
    var res = document.querySelector('div#res')


    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(txtini.value)
        var f = Number(txtfim.value)
        var p = Number(txtpasso.value)
        if ( i < f) {
            for (var c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }  

    }


    



}