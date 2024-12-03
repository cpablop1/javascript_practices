function prepareGifts(gifts) {
    // Code here
    var uniqueGifts = [...new Set(gifts)];
    uniqueGifts = uniqueGifts.sort((a, b) => a - b);
    return uniqueGifts;
  }

  
const gifts1 = []
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1)