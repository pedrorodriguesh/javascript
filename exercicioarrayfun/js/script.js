
var arrayn = []


function vetor(){
    let txtn = document.querySelector('input#txtnum')
    let n = Number(txtn.value)
    let sel = document.querySelector('select#listnum')

    arrayn.push(n)
    
    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    sel.appendChild(item)

    res.innerHTML = ' '
    
    
}



function analisar(){

    var res = document.querySelector('div#res')

    res.innerHTML = `Ao todo temos ${arrayn.length} números cadastrados;`

}