//estrutura que não aceita repetição

const times = new Set()

times.add("Vasco")
times.add("São Paulo")
times.add("Vasco")

console.log(times)

const name = ["Lucas",  "Rian", "kalebe", "Rian"]
const nameSet = new Set(name)
console.log(nameSet)