

function organizeShoes(shoes) {
  const leftShoes = {};
  const rightShoes = {};
  const pairs = [];

  shoes.forEach(shoe => {
    if (shoe.type === 'I') {
      leftShoes[shoe.size] = (leftShoes[shoe.size] || 0) + 1;
    } else if (shoe.type === 'R') {
      rightShoes[shoe.size] = (rightShoes[shoe.size] || 0) + 1;
    }
  });

  for (const size in leftShoes) {
    if (rightShoes[size]) {
      const pairCount = Math.min(leftShoes[size], rightShoes[size]);
      for (let i = 0; i < pairCount; i++) {
        pairs.push(parseInt(size));
      }
    }
  }

  return pairs;

}


const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

var print = organizeShoes(shoes3)
console.log(print);