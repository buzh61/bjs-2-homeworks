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
    sum += Number(arr[i]);
  }

  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;

  for (i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max, sum;
  max = 0;
  sum = 0;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    arr = arrOfArr[i];
    sum = func(arr);
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, diff;
  min = arr[0];
  max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = Number(arr[i]);
    } else if (arr[i] > max) {
      max = Number(arr[i]);
    }
  }

  diff = Math.abs(max - min);
  console.log(diff);
  return diff;
}

console.log(worker([1, 2, 3])); // 6
console.log(worker([4, 5, 6])); // 15
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker); // 15

console.log(worker([10, 10, 11])); // 31
console.log(worker([20, 10])); // 30
arrOfArr = [[10, 10, 11], [20, 10]];
makeWork(arrOfArr, worker); // 31

console.log(worker([0, 0, 0])); // 0
console.log(worker([-1, -100])); // -101
arrOfArr = [[0, 0, 0], [-1, -100]];
makeWork(arrOfArr, worker); // 0

//worker2
console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
makeWork(arrOfArr, worker2); // 30

console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork(arrOfArr, worker2); // 98
