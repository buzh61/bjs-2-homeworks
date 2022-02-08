// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = Number(arr[i]);
    } else if (arr[i] > max) {
      max = Number(arr[i]);
    }
    sum = + arr[i]
  }

  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg, sum: sum };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
