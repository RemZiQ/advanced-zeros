function integerDivision(denominator, divider) {
  return (denominator - denominator % divider) / divider;
}

function compareNumeric(a, b) {
  return a - b;
}

function primeFactorize(number) {
  let i = 2,
    n = number,
    arrayOfMultipliers = [];

  while (i <= n) {
    if (n % i === 0) {
      arrayOfMultipliers.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return arrayOfMultipliers;
}

function countNumberMultipliers(number, multiplier, degree) {
  let result = 0;
  for (let i = multiplier;; i *= multiplier) {
    if (integerDivision(number, i) < 1) {
      break;

    }
    if (integerDivision(number, i) >= 1) {
      result += integerDivision(number, i);
    }
  }
  return integerDivision(result, degree);
}


module.exports = function getZerosCount(number, base) {
  let arrayOfMultipliers = primeFactorize(base);
  let objOfMultipliers = {};
  let count = 1;

    for (let i = 0; i < arrayOfMultipliers.length; i++){
      let key = arrayOfMultipliers[i];
      if(arrayOfMultipliers[i] === arrayOfMultipliers[i+1]){
        count++;
      }
      objOfMultipliers[key] = count;
      if(arrayOfMultipliers[i] !== arrayOfMultipliers[i+1]){
        count = 1;
      }
    }
    
  let arrayResult = [];  
    for(let key in objOfMultipliers){
      arrayResult.push(countNumberMultipliers(number, key, objOfMultipliers[key]))
    }

  arrayResult.sort(compareNumeric);
  return arrayResult[0];
};




