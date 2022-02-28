const { data } = require('./data');

//console.log(data);

function part1(data){
  let arr = Array(data[0].length).fill(0);
  data.forEach(item => {
    for(let i = 0; i < item.length; i++){
      if(item[i] === '1'){
        arr[i]++;
      }else{
        arr[i]--;
      }
    }
  })

  let gammaRate = '';
  let epsilonRate = '';
  
  arr.forEach(item => {
    if(item >= 0){
      gammaRate += '1';
      epsilonRate += '0';
    }else{
      gammaRate += '0';
      epsilonRate += '1';
    }
  })
 
  return parseInt(gammaRate,2) * parseInt(epsilonRate,2);
}

const result = part1(data);

console.log(result);
