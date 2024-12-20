function organizeInventory(inventory) {
    // Code here
    var ordered = {};

    inventory.forEach(item => {
        if (item.category in ordered) { // Evaluamos si existe la categoria en el nuevo objecto
          
            if (item.name in ordered[item.category]) { // Evaluamos si existe el regalo en el objto
                ordered[item.category][item.name] += item.quantity
            } else { // si no lo agregamos
                ordered[item.category][item.name] = item.quantity;
            }
        } else { // si no lo agregamos
            var element = {};
            element[item.name] = item.quantity;
            ordered[item.category] = element;
        }
    });

    return ordered;
}

const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

const inventary2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]

var result = organizeInventory(inventary2)

console.log(result);