let num = document.querySelector('input#fnum')      // pegando o valor do formulário.
let lista = document.querySelector('select#flista')   // selecionando a lista.
let res = document.querySelector('div#res')         //selecionando a div onde os resultados vão aparecer.
let valores = []  // setando o array (vetor), faz isso com []


function isNumero(n){                              // função para ver se o número é menor que 1 ou maior que 100.
    if (Number(n) >= 1 && Number(n) <= 100){ 
        return true      
    } else {
        return false                               
    }
}


function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){ // Aqui ele verifica se o número informado já existe no vetor, esse  -1 significa = Não existe.
        return true
    } else {
        return false
    }
}


function adicionar() {                                         // Chamando a função com o "onclick" e ai essa mesma função chama as funções de cima.
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Aqui as funções de cima são chamadas. (isNumero e inLista)
        valores.push(Number(num.value))
        let item = document.createElement('option')    // Aqui a variável "item" é criada sendo um elemento option dentro do HTML.
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) // appendChild ele tá criando um "filho" dentro da lista, esse filho é a variável "item" que no caso é um option.

        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus() // Comando usado pra seleção ficar no input


}


function finalizar(){                   // Essa é a função que é chamada quando o segundo botão é apertado, para checar os valores.
    if (valores.length == 0){     // Aqui ele checa o tamanho do vetor, se estiver vazio ele manda o alert.
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length    // Aqui é bem simples, valores.length, essa propriedade length devolve o tamanho do vetor. 
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0 
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot


        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
}