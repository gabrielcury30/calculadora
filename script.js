const somar = (x, y) => x + y;

const subtrair = (x, y) => x - y;

const multiplicar = (x, y) => x * y;

const dividir = (x, y) => x / y;

let x, y, operador;

const operar = (x, operador, y) => {
    switch(operador) {
        case "+":
            return somar(x, y);
            break;
        case "-":
            return subtrair(x, y);
            break;
        case "*":
            return multiplicar(x, y);
            break;
        case "/":
            return dividir(x, y)
            break;
        default:
            console.log("Operador invalido!");
    };
};