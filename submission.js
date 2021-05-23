const findSum = function(array) {
  let sum = 0;
  array.forEach(num => {sum += num;});
  return sum;
};

const findFrequency = function(array) {
  const counts = {};
  
  array.forEach(str => {
    if (str in counts) {
      counts[str] += 1;
    } else {
      counts[str] = 1;
    }
  });

  let max = counts[array[0]];
  let min = counts[array[0]];

  const frequencies = {
      most: array[0],
      least: array[0]
    };

  for (let key in counts) {
    if (counts[key] > max) {
      max = counts[key];
      frequencies.most = key;
    }
    if (counts[key] < min) {
      min = counts[key];
      frequencies.least = key;
    }
  }
 
  return frequencies;
};

const isPalindrome = function(str) {
  const strLength = str.length;
  const stopValue = strLength % 2 === 0 ? strLength/2 - 1 : Math.floor(strLength/2);  
  
  for (let i = 0; i <= stopValue; i++) {
    if (str[i].toUpperCase() !== str[strLength-1-i].toUpperCase()) {return false;}
  }
  return true;
};

const largestPair = function(array) {
  let maxProduct = array[0] * array[1];
  for (let i = 1; i < array.length; i++) {
    let currProduct = array[i] * array[i+1];
    if (currProduct > maxProduct) {maxProduct = currProduct;}
  }
  return maxProduct;
};

const removeParenth = function(str) {
  let openIndex = 0;
  let closedIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === `(`) {openIndex = i;}
    if (str[i] === `)`) {
      closedIndex = i;
      break;}
  }
  return str.substring(0,openIndex) + str.substring(closedIndex+1);
};

const scoreScrabble = function(str) {
  const scoring = {
    "1": ['a','e','i','o','u','l','n','r','s','t'],
    "2": ['d','g'],
    "3": ['b','c','m','p'],
    "4": ['f','h','v','w','y'],
    "5": ['k'],
    "8": ['j','x'],
    "10": ['q','z']
  }

  let score = 0;

  for (let i = 0; i < str.length; i++) {
    for (let key in scoring) {
      if (scoring[key].includes(str[i])) {
        score += parseInt(key);
        break;
      }
    }
  }
  return score;
};
