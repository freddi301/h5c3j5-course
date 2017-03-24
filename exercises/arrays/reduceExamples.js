function sumArrayOfNumbers(arrayOfNumbers) {
  return arrayOfNumbers.reduce(function(total, number){
    return total + number;
  }, 0);
}

sumArrayOfNumbers([1,2,3,4])
// 10

function sumArrayOfNumbers2(arrayOfNumbers) {
  var summer = function(total, number) {
    return total + number;
  }
  var total = arrayOfNumbers.reduce(summer, 0);
  return total;
}

sumArrayOfNumbers2([1,2,3,4]);
// 10

function averageOfArrayOfNumbers(arrayOfNumbers) {
  var averager = function(total, number){
    return total + number;
  }
  var total = arrayOfNumbers.reduce(averager, 0);
  var average = total / arrayOfNumbers.length;
  return average;
}

averageOfArrayOfNumbers([1,2,3,4]);
// 2.5

function averageOfArrayOfNumbers2(arrayOfNumbers){
  return arrayOfNumbers.reduce(function(total, number){
    return total + number;
  }, 0) / arrayOfNumbers.length;
}
averageOfArrayOfNumbers2([1,2,3,4]);
// 2.5

function myMap(array, func){
  return array.reduce(function(memo, item){
    memo.push(func(item));
    return memo;
  }, []);
}

myMap([1,2,3], function(item){ return item * item; });
// [1,4,9]

[1,2,3,4,5,6,7,8].find(function(number){
  if (number * number > 10) return true;
  return false;
});
// 4

[1,2,3,4,5,6,7,8].filter(function(number){
  if (number * number > 10) return true;
  return false;
});
// [4,5,6,7,8]

[-4, -3, -2, -1, 0, 1, 2, 3, 4]
  .map(function(item){ return item * item })
  .sort(function(left, right){
    if (left === right) return 0;
    else if (left > right) return -1;
    else if (left < right) return 1;
  })
// [-4, -3, -2, -1, 0, 1, 2, 3,  4]
// [16,  9,  4,  1, 0, 1, 4, 9, 16]
// [16, 16,  9,  9, 4, 4, 1, 1,  0]
