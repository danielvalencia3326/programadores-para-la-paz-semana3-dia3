let intento = 1
let ciclo = 1
const maximoIntentos = 3

if (maximoIntentos < 1) {console.log ("el maximo de  intentos de ser mayor a 1")}

console.log("Práctica inicial con while")
console.log("Vamos a repetir un proceso mientras el intento sea menor o igual al máximo.")

while (intento <= maximoIntentos) {
  console.log("Intento de revisión número:", intento, "numero de ciclo:", ciclo);
  intento = intento + 1
  ciclo = ciclo + 1 
}

console.log("Proceso de revisión finalizado.")
