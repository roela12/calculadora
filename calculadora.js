function sumar() {
  const valor1 = parseFloat(prompt("Ingrese el primer sumando: "));
  const valor2 = parseFloat(prompt("Ingrese el segundo sumando: "));
  const resultado = valor1 + valor2;
  alert("El resultado de la suma es: " + resultado);
}

function restar() {
  const valor1 = parseFloat(prompt("Ingrese el minuendo: "));
  const valor2 = parseFloat(prompt("Ingrese el sustraendo: "));
  const resultado = valor1 - valor2;
  alert("El resultado de la resta es: " + resultado);
}

function multiplicar() {
  const valor1 = parseFloat(prompt("Ingrese el primer factor: "));
  const valor2 = parseFloat(prompt("Ingrese el segundo factor: "));
  const resultado = valor1 * valor2;
  alert("El resultado de la multiplicacion es: " + resultado);
}

function dividir() {
  const valor1 = parseFloat(prompt("Ingrese el dividendo: "));
  const valor2 = parseFloat(prompt("Ingrese el divisor: "));
  const resultado = valor1 / valor2;
  alert("El resultado de la division es: " + resultado);
}

function potenciar() {
  const valor1 = parseFloat(prompt("Ingrese la base: "));
  const valor2 = parseFloat(prompt("Ingrese el exponente: "));
  const resultado = valor1 ** valor2;
  alert("El resultado de la potenciacion es: " + resultado);
}

function raiz() {
  const valor1 = parseFloat(prompt("Ingrese el radicando: "));
  const valor2 = parseFloat(prompt("Ingrese el indice: "));
  const resultado = valor1 ** (1 / valor2);
  alert("El resultado de la raiz es: " + resultado);
}

function main() {
  let opc = 0;
  while (opc != 7) {
    opc = prompt("Ingrese una opcion: ");
    switch (opc) {
      case "1":
        sumar();
        break;
      case "2":
        restar();
        break;
      case "3":
        multiplicar();
        break;
      case "4":
        dividir();
        break;
      case "5":
        potenciar();
        break;
      case "6":
        raiz();
        break;
      case "7":
        alert("Has salido correctamente.");
        break;
      default:
        alert("La opcion ingresada no es valida.");
    }
  }
}
