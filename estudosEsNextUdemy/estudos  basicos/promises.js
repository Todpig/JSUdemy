function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos + 1000),
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, "Hello World")
    .then(frase => frase.concat(' person'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

