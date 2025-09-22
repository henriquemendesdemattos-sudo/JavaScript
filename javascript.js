let nome = "Henrique"
let idade = 33
let almoco = true

console.log(nome)
console.log(idade)
console.log(almoco)

let num1 = 5, num2 = 8

console.log(num1 - num2)
console.log(num1 + num2)
console.log(num1 / num2)
console.log(num1 * num2)

let cidade = "Osasco"
let estado = "São Paulo"

console.log("Eu moro em " + cidade + ", " + estado)

let mensagem = `Eu moro em ${cidade}, ${estado}`

console.log(mensagem)

let idad = prompt("Digite a sua idade: ")
idad = parseInt(idad)
if (idad >= 18) {
    alert("Você pode tirar a CNH!")
}
else {
    let anosFalta = 18 - idad
    alert("Faltam " + anosFalta + " anos para você poder tirar a CNH.")
}
