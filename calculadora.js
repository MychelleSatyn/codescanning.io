// Função para adicionar dois números
function adicionar(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtrair(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiplicar(a, b) {
    return a * b;
}

// Função para dividir dois números
function dividir(a, b) {
    // Erro 1: Condição mal formada
    if (b != 0) { // Alterado !== para !=
        return a / b;
    } else {
        return "Não é possível dividir por zero!";
    }
}

// Exemplo de uso das funções
// Erro 2: Nome da função incorreto
console.log("Adição: " + adicionar(5, 3));
console.log("Subtração: " + subtrair(5, 3));
console.log("Multiplicação: " + multiplicar(5, 3));
// Erro 3: Parâmetros incorretos
console.log("Divisão: " + dividir(5)); // Removido o segundo parâmetro
