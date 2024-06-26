// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMarsKilo = 225000000;
let distanceToMoonKilo = 384400;
const mPk = 0.621;

let milesToMars = distanceToMarsKilo * mPk;
let hoursToMars = distanceToMarsKilo * shuttleSpeed;
let daysToMars = hoursToMars / 24;

let milesToMoon = distanceToMoonKilo * mPk;
let hoursToMoon = distanceToMoonKilo * shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName + " will take " + daysToMars + " days to reach the Mars.");

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
