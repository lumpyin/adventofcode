const { data1 } = require('./data');
const { data2 } = require('./data');


//part1
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


//part2

function findMostLeastBit(data,index){
  let one = 0;
  let zero = 0;
  data.forEach(item => {
    if(item[index] === '0'){
      zero++;
    }else{
      one++;
    }
  })
  //only check the column of index
  if(zero > one){
    return { most:'0', least:'1'}
  }else{
    return { most : '1', least:'0'}
  }
  

}
function getOxyRating(data,index = 0){
  const { most } = findMostLeastBit(data,index);
  const arr = data.filter((item) => item[index] === most);
  if(arr.length === 1){
    return arr[0];
  }
  return getOxyRating(arr,index + 1);
}
function getCO2Rating(data, index = 0){
  const { least } = findMostLeastBit(data,index);
  const arr = data.filter((item) => item[index] === least);
  if(arr.length === 1){
    return arr[0];
  }
  return getCO2Rating(arr,index + 1);
}

function part2(data){
  const oxyRating = getOxyRating(data);
  const co2Rating = getCO2Rating(data);
  
  return parseInt(oxyRating,2) * parseInt(co2Rating,2);
}


const result = part2(data2);

console.log(result);
