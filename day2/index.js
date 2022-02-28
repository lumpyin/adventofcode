//const { data } = require('./data1');
const { data } = require('./data2');
//console.log(data);

function part1(data){
  let x = 0;
  let y = 0;
  data.forEach(item => {
    if(item[0] === 'forward'){
      x += Number(item[1]);
    }
    if(item[0] === 'up'){
      y -= Number(item[1]);
    }
    if(item[0] === 'down'){
      y += Number(item[1]);
    }
  });

  return x * y;
}

//const result = part1(data);

function part2(data){
  let x = 0;
  let y = 0;
  let aim = 0;
  data.forEach(item => {
    if(item[0] === 'forward'){
      x += Number(item[1]);
      y += aim * Number(item[1]); 
    }
    if(item[0] === 'up'){
      aim -= Number(item[1]);
    }
    if(item[0] === 'down'){
      aim += Number(item[1]);
    }
  });

  return x * y;
}

const result = part2(data);
console.log(result);

