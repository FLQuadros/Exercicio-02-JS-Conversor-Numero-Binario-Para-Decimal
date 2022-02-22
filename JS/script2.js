let texto = prompt('Digite um texto:')

let textos = []

textos.push(texto)

console.log(textos)

for (let valor of textos) {
    document.write(`<p>Texto em maiúsculo: ${valor.toUpperCase()}</p>`)
    document.write(`<p>Texto em minúsculo: ${valor.toLowerCase()}</p>`)
    document.write(`<p>Texto letra por letra: ${valor.split('')}<p/>`)
    console.log(valor.split(''))
}


