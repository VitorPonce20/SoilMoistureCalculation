const { log, Console } = require("console");

var moistureLevel = 0;
var fine = "Clay";
var medium = "Loamy";
var coarse = "Sandy";
var irrigationNeed = false;
var danger = "Dangerously Low Soil Moisture"

function calculate(moistureLevel, soilType){
  if (soilType == "Clay" && moistureLevel < 60) {
    console.log('Soil Type: ' + soilType)
    console.log('Below 60: ' + danger);
    irrigationNeed = true;
    console.log('Irrigation is needed');  
  } else if (soilType == "Clay" && moistureLevel >= 60 && moistureLevel < 80) {
    console.log('Soil Type: ' + soilType)
    irrigationNeed = true;
    console.log('Between 60 and 80: ' + 'irrigation needed? ' + irrigationNeed);
    }
    else if (soilType == "Clay" && moistureLevel == 80) {
      console.log('Soil Type: ' + soilType)
      irrigationNeed = false;
      console.log('level 80 ' + 'Irrigation is needed? ' + irrigationNeed );  
    }
    else if (soilType == "Clay" && moistureLevel >= 80) {
    console.log('Soil Type: ' + soilType)
    irrigationNeed = false;
    console.log('Upper than level 80 ' + 'Irrigation is needed? ' + irrigationNeed );  
    }
  
  if (soilType == "Loamy" && moistureLevel < 70) {
    console.log('Soil Type: ' + soilType)
    console.log('Below 70: ' + danger);
    irrigationNeed = true;
    console.log('Irrigation is needed');  
  } else if (soilType == "Loamy" && moistureLevel >= 70 && moistureLevel < 88) {
    console.log('Soil Type: ' + soilType)
    irrigationNeed = true;
    console.log('Between 70 and 88: ' + 'irrigation needed? ' + irrigationNeed);
    }
    else if (soilType == "Loamy" && moistureLevel == 88) {
      console.log('Soil Type: ' + soilType)
      irrigationNeed = false;
      console.log('level 88 ' + 'Irrigation is needed? ' + irrigationNeed );  
    }
    else if (soilType == "Loamy" && moistureLevel >= 88) {
      console.log('Soil Type: ' + soilType)
      irrigationNeed = false;
      console.log('Upper than level 88 ' + 'Irrigation is needed? ' + irrigationNeed );  
    }

  }
  
  
console.log('=================================')
console.log('Fine Testing')
console.log('Test 1: moistureLevel = 45');
moistureLevel = 45
calculate(moistureLevel, fine);

console.log('Test 2: moistureLevel = 55');
moistureLevel = 55
calculate(moistureLevel, fine);

console.log('Test 3: moistureLevel = 60');
moistureLevel = 60
calculate(moistureLevel, fine);

console.log('Test 4: moistureLevel = 75');
moistureLevel = 75
calculate(moistureLevel, fine);

console.log('Test 5: moistureLevel = 80');
moistureLevel = 80
calculate(moistureLevel, fine);

console.log('Test 6: moistureLevel = 85');
moistureLevel = 85
calculate(moistureLevel, fine);

console.log('=================================')
console.log('Medium Testing')
console.log('Test 1: moistureLevel = 45');
moistureLevel = 45
calculate(moistureLevel, medium);

console.log('Test 2: moistureLevel = 69');
moistureLevel = 69
calculate(moistureLevel, medium);

console.log('Test 3: moistureLevel = 70');
moistureLevel = 70
calculate(moistureLevel, medium);

console.log('Test 4: moistureLevel = 87');
moistureLevel = 87
calculate(moistureLevel, medium);

console.log('Test 5: moistureLevel = 88');
moistureLevel = 88
calculate(moistureLevel, medium);

console.log('Test 6: moistureLevel = 100');
moistureLevel = 100
calculate(moistureLevel, medium);