let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let age = 15;

if(registeredEarly && age >= 18){
  raceNumber+= 1000;
  
}

if(registeredEarly &&  age > 18){
console.log(`Race will begin at 9:30am, your race number is: ${raceNumber}`);

}

else if(!registeredEarly && age > 18){
  console.log(`Race will begin at 11:00am, your race number is: ${raceNumber}`);
}


else if(age < 18){
  console.log(`Race will begin at 12:30pm, your race number is: ${raceNumber}`);
}

else{
  console.log('go to registration desk')
}
