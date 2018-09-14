/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	length = preferences.length;
	let loveTriangleNumber = 0;
	let lovingNumber,belovedNumber;

  for(let i = 0;i < preferences.length;i++){
  	lovingNumber = preferences[i];
  	
  	for(let j = 0;j < 2;j++){
  		belovedNumber = preferences[lovingNumber - 1];
  		if(belovedNumber === lovingNumber){
  			lovingNumber = -1;
  			break;
  		}
  		lovingNumber = belovedNumber;
  	}

  	if(i === lovingNumber - 1){
  		loveTriangleNumber++;
  	}
  }
  return loveTriangleNumber / 3;
};
