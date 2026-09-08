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

const botao0 = document.getElementById("0");
const botao1 = document.getElementById("1");
const botao2 = document.getElementById("2");
const botao3 = document.getElementById("3");
const botao4 = document.getElementById("4");
const botao5 = document.getElementById("5");
const botao6 = document.getElementById("6");
const botao7 = document.getElementById("7");
const botao8 = document.getElementById("8");
const botao9 = document.getElementById("9");

const painel = document.getElementById("painel");

botao0.addEventListener("click", () => {
    x = 0;
    painel.innerText = `${x}`;
});

botao1.addEventListener("click", () => {
    x = 1;
    painel.innerText = `${x}`;
});

botao2.addEventListener("click", () => {
    x = 2;
    painel.innerText = `${x}`;
});

botao3.addEventListener("click", () => {
    x = 3;
    painel.innerText = `${x}`;
});

botao4.addEventListener("click", () => {
    x = 4;
    painel.innerText = `${x}`;
});

botao5.addEventListener("click", () => {
    x = 5;
    painel.innerText = `${x}`;
});

botao6.addEventListener("click", () => {
    x = 6;
    painel.innerText = `${x}`;
});

botao7.addEventListener("click", () => {
    x = 7;
    painel.innerText = `${x}`;
});

botao8.addEventListener("click", () => {
    x = 8;
    painel.innerText = `${x}`;
});

botao9.addEventListener("click", () => {
    x = 9;
    painel.innerText = `${x}`;
});
