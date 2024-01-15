let moistureLevel = 0;
const fine = "Clay";
const medium = "Loamy";
const coarse = "Sandy";
let irrigationNeed = false;
const danger = "Dangerously Low Soil Moisture"

function calculate(moistureLevel, soilType){
  try{
    logSoil(moistureLevel, soilType)
    if (soilType == fine){
      if (moistureLevel < 60) {         
         console.log('Below 60: ' + danger);
         irrigationNeed = true;
         console.log('Irrigation is needed? ' + irrigationNeed);      
      } 
      else if (moistureLevel >= 60 && moistureLevel < 80) {        
        irrigationNeed = true;
        console.log('Between 60 and 80: ' + 'irrigation needed? ' + irrigationNeed);
      }  
      else if (moistureLevel >= 80) {        
        irrigationNeed = false;
        console.log('level 80 or plus' + 'Irrigation is needed? ' + irrigationNeed );  
        }    
      }
  
    else if (soilType == medium){
      if ( moistureLevel < 70) {        
        console.log('Below 70: ' + danger);
        irrigationNeed = true;
        console.log('Irrigation is needed: ' + irrigationNeed);;  
      } 
      else if (moistureLevel >= 70 && moistureLevel < 88) {        
        irrigationNeed = true;
        console.log('Between 70 and 88: ' + 'irrigation needed? ' + irrigationNeed);
      }  
      else if (moistureLevel >= 88) {        
        irrigationNeed = false;
        console.log('level 88 or plus' + 'Irrigation is needed? ' + irrigationNeed );  
        }
      }
      
    else if (soilType == "Sandy"){
      if (moistureLevel < 80) {        
        console.log('Below 80: ' + danger);
        irrigationNeed = true;
        console.log('Irrigation is needed: ' + irrigationNeed);;  
      } 
      else if (moistureLevel >= 80 && moistureLevel < 90) {        
        irrigationNeed = true;
        console.log('Between 80 and 90: ' + 'irrigation needed? ' + irrigationNeed);
      }    
      else if (moistureLevel >= 90) {        
        irrigationNeed = false;
        console.log('level 90 or plus ' + 'Irrigation is needed? ' + irrigationNeed );  
      }  
      
    }
    
  }
  catch(error){ console.error('Error: ' + error.message); }
}


function logSoil(moistureLevel, soilType){
  console.log('Soil Type: ' + soilType + ' moisture level: ' + moistureLevel)
}
  
console.log('==================================================================')
console.log('Fine Testing')
console.log('Test 1: moistureLevel = 45');
moistureLevel = null
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

console.log('==================================================================')
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

console.log('==================================================================')
console.log('Coarse Testing')
console.log('Test 1: moistureLevel = 65');
moistureLevel = 65
calculate(moistureLevel, coarse);

console.log('Test 2: moistureLevel = 79');
moistureLevel = 79
calculate(moistureLevel, coarse);

console.log('Test 3: moistureLevel = 80');
moistureLevel = 80
calculate(moistureLevel, coarse);

console.log('Test 4: moistureLevel = 89');
moistureLevel = 89
calculate(moistureLevel, coarse);

console.log('Test 5: moistureLevel = 90');
moistureLevel = 90
calculate(moistureLevel, coarse);

console.log('Test 6: moistureLevel = 101');
moistureLevel = 'abc'
calculate(moistureLevel, coarse);