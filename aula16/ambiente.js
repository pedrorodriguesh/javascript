function parimp(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(33)

console.log(`O número é ${res}`)