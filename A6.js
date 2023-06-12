const array = [1, 2, 3, 4, 2, 1, 5, 6, 3];
const uniqueArray = [];
const tempObj = {};

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (!tempObj[element]) {
    uniqueArray.push(element);
    tempObj[element] = true;
  }
}

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// finding the prime numbers  in an array

const array = [1,2,3,4,5,6,7,8,9]
var flag

for(let i=0; i<array.length; i++){
    flag = 0
    for(let j=2; j<array[i]; j++){
        if(array[i] % j === 0){
            flag = 1;
            break;
        }
    }
    if(flag === 0){
        console.log(array[i]);
    }
}
