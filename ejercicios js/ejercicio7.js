/* ¡ El grinch 👹 ha pasado por el taller de Papá Noel! ¡Y vaya desastre que ha montado! Ha cambiado el orden de algunos paquetes, por lo que no se pueden realizar los envíos.

Por suerte, el elfo Pheralb ha detectado el patrón que siguió el grinch para desordenarlos. Ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones son las siguientes:

Recibirá una cadena que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, deberás invertir el contenido dentro de ellos.
Si hay paréntesis anidados, resuelva primero los más internos.
Devuelve la cadena resultante con los paréntesis eliminados, pero con el contenido correctamente invertido. */

function fixPackages(packages) {
    // Code Hire
    let stack = []
    for (let char of packages) {
        if (char === ')') {
            let temp = '';
            // Desapilamos hasta encontrar el paréntesis de apertura
            while (stack.length && stack[stack.length - 1] !== '(') {
                temp += stack.pop();
            }
            // Eliminamos el paréntesis de apertura
            stack.pop();
            //Empejamos los carácteres invertidos de nuevo a la pila
            for (let t of temp) {
                stack.push(t);
            }
        } else {
            // Empujamos todos los carácteres a la pila
            stack.push(char);
        }
    }
    // Unimos todos los carácteres de la pila en una cadena
    return stack.join('');
}

let output = fixPackages('abc(def(gh)i)jk');

console.log(output);