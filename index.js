const { log, Console } = require("console");

var moistureLevel = 0;
var fine = "Clay";
var medium = "Loamy";
var coarse = "Sandy";
var irrigationNeed = false;
var danger = "Dangerously Low Soil Moisture"

function calculate(moistureLevel, soilType){
  if (soilType == "Clay" && moistureLevel < 60) {
    console.log('Below 60: ' + danger);
    irrigationNeed = true;
    console.log('Irrigation is needed');  
  } else if (soilType == "Clay" && moistureLevel >= 60 && moistureLevel < 80) {
    irrigationNeed = true;
    console.log('Between 60 and 80: ' + 'irrigation needed? ' + irrigationNeed);
    }
    else if (soilType == "Clay" && moistureLevel >= 80) {
      irrigationNeed = false;
      console.log('Upper than level 80 ' + 'Irrigation is needed? ' + irrigationNeed );  
    }
  
  }


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
