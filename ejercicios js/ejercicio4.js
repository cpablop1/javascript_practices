/* La función debe devolver una cadena que represente el árbol de Navidad, construida de la siguiente manera:

El árbol está formado por triángulos de caracteres especiales.
Los espacios en los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud en cada lado.
Debe asegurarse de que el árbol tenga la forma correcta utilizando saltos de línea \n para cada línea. */

function createXmasTree(height, ornament) {
    /* Code here */
    var tree = '';
    var sides = (height - 1);
    var stem = '_'.repeat(sides) + '#' + '_'.repeat(sides) + '\n' + '_'.repeat(sides) + '#' + '_'.repeat(sides);

    for(let i = 0; i < height; i++){
        sides = '_'.repeat(height - i - 1);
        tree += (sides + ornament.repeat(2 * i +1) + sides + '\n')
    }

    tree += stem;

    return tree
}


const tree = createXmasTree(3, '*')
console.log(tree)
