let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber} and your race begins at 9:30am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber} and your race begins at 11:00am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and your race begins at 12:30pm.`);
} else {
  console.log('Please check back with registration desk');
}
