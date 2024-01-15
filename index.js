

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
         console.log('Irrigation is needed: ' + irrigationNeed);      
      } 
      else if (moistureLevel >= 60 && moistureLevel < 80) {        
        irrigationNeed = true;
        console.log('Between 60 and 80: ' + 'irrigation needed: ' + irrigationNeed);
      }  
      else if (moistureLevel >= 80) {        
        irrigationNeed = false;
        console.log('level 80 or plus ' + 'Irrigation is needed: ' + irrigationNeed );  
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
        console.log('Between 70 and 88: ' + 'irrigation needed: ' + irrigationNeed);
      }  
      else if (moistureLevel >= 88) {        
        irrigationNeed = false;
        console.log('level 88 or plus ' + 'Irrigation is needed: ' + irrigationNeed );  
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
        console.log('Between 80 and 90: ' + 'irrigation needed: ' + irrigationNeed);
      }    
      else if (moistureLevel >= 90) {        
        irrigationNeed = false;
        console.log('level 90 or plus ' + 'Irrigation is needed: ' + irrigationNeed );  
      }  
      
    }
    
  }
  catch(error){ console.error('Error: ' + error.message); }
}

function logSoil(moistureLevel, soilType){
  if(soilType && moistureLevel !== null){
    console.log('Soil Type: ' + soilType + ' moisture level: ' + moistureLevel)
  } else{throw new Error('Error: Soil Type or Moisture Level is null')}
}

function testFunc(soilType, levels){
  console.log('==========================================================')
  console.log('Testing ' + soilType + ' soil')

  levels.forEach((level, index) =>{ 
    console.log('Test ' + (index + 1) + ': ' + level);
    moistureLevel = level;
    calculate(moistureLevel, soilType);
  });
  
}

testFunc(fine, [null, 50, 60, 70, 80, 90, 100, null]);
testFunc(medium, [null, 50, 60, 70, 80, 90, 100, null]);
testFunc(coarse, [null, 50, 60, 70, 80, 90, 100, null]);