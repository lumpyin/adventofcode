const {data} = require('./data');

function help(data){
  let prevSum;
  let sum;
  let result = 0;
  for(let i = 0, j = 1 , k = 2; k < data.length - 1; i++, j++, k++){
    prevSum = data[i] + data[j] + data[k];
    sum = data[i + 1] + data[j + 1] + data[k + 1];
    if(sum - prevSum > 0){
      result++;
    }
  }
  return result;
}

const result = help(data);

