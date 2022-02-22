let quant_numeros = parseInt(prompt('Quantos números deseja digitar?'))

let numeros = []
let soma = 0
let media = 0

for( let i = 0; i < quant_numeros; i++){
    let n = Number(prompt('Digite o ' + (i+1) + 'º número.'))

    numeros.push(n)
}

for (let valores of numeros) {
    soma += valores
}
document.write(`<p>A soma dos números é ${soma}.</p>`)

media = soma/quant_numeros
document.write(`<p>A média dos números é ${media}.</p>`)
document.write(`<p>-------------------------------</p>`)

for (let valores of numeros) {
    document.write(`<p>O quadrado de ${valores} é ${valores**2}</p>`)
    document.write(`<p>A raiz quadrada de ${valores} é ${valores**(1/2)}</p>`)
    document.write(`<p>A raiz cúbica de ${valores} é ${valores**(1/3)}</p>`)
    document.write(`<p>-------------------------------</p>`)
    
    
}



