let heroi = "Raze"
let xp = 5000
let rank = ""
const texto = `O Herói de nome ${heroi} está no nível de: `

if (xp < 1000){
    rank = "Ferro"
}
 else if (xp <= 2000){
    rank = "Bronze"
 }
 else if (xp <= 5000){
    rank = "Prata"
 }
 else if (xp <= 7000){
    rank = "Ouro"
 }
 else if (xp <= 8000){
    rank = "Platina"
 }
 else if (xp <= 9000){
    rank = "Ascendente"
 }
 else if (xp <= 10000){
    rank = "Imortal"
 }
 else {
    (xp > 10000)
    rank = "Radiante"
 }

 console.log (texto + rank)