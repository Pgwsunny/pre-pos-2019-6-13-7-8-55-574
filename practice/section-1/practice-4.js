'use strict';

function collectSameElements(collectionA, objectB) {
  let result =[];
  for (let i = 0; i < collectionA.length; i++) {
    for (let j = 0; j < objectB.value.length; j++) {
      if(objectB.value[j] ===collectionA[i].key){
          result.push(collectionA[i].key)
      }   
    }
  }
  return result;
}
