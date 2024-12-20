/* Ya hemos envuelto cientos de regalos 🎁… pero un elfo olvidó comprobar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo ( *) y cuenta como "dentro de la caja" si:

Está completamente rodeado por #los bordes de la caja.
El *no está en los bordes de la caja.
Tenga en cuenta que el *puede estar dentro, fuera o incluso no estar allí. Debemos devolverlo truesi *está dentro de la caja y falseen caso contrario. */

function inBox(box) {
    var res = true;
    var include = box.some(i => i.includes('*'));

    if (include) {
        var top = box[0].includes('*');
        var bottom = box[box.length - 1].includes('*');

        if (top | bottom) {
            res = false;
        } else {
            box.forEach(element => {
                if (element.includes('*')) {
                    if (element.indexOf('*') === 0) {
                        res = false;
                    } else if (element.indexOf('*') === element.length - 1) {
                        res = false;
                    }
                }
            });
        }
    } else {
        res = false
    }
    return res
}

var box1 = inBox([
    "###",
    "#*#",
    "##"
])

console.log(box1);