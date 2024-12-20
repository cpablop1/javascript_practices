/*Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.*/

function createFrame(names) {
    // Code here
    var texto = '';
    const longestName = names.reduce((a, b) => a.length > b.length ? a : b, '').length; // Obtenemos el texto mas largo

    texto += '*'.repeat(longestName + 4); // Marco superior

    names.forEach(element => {
    texto += '\n* ' + element + " ".repeat(longestName - element.length) + " *";
    });

    var marcoFinal = '*'.repeat(longestName + 4);
    texto += '\n' + marcoFinal; // Marco inferior

    return texto;
}

var text = createFrame(['midu', 'madeval', 'educalvolpz']);
console.log(text);