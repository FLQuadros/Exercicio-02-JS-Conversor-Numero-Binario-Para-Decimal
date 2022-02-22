let n = prompt('Digite um número binário:')

let numero = []
soma = 0
for(let i = 0; i < n.length; i++ ){
    numero.push(n[i])    
}

numero.reverse()

for(let i = 0; i < numero.length; i++){
    soma += (2**(i))*numero[i]
}

document.write(`<p>O númer binário ${n} equivale ao número ${soma} em decimal.</p>`)
console.log(`O númer binário ${n} equivale ao número ${soma} em decimal.`)

