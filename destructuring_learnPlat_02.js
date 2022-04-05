const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// this will work: log Tesla, then log Mercedes

const employeeX = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employeeX;
//Predict the output
// console.log(name);
console.log(otherName);

// name won't work, VS is telling you that; can't refer a "middle man" variable, but otherName will work fine: Elon (shithead that he is)

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword); 
// above line is bogus: there is not attribute called 'hashedPassword' in const person
console.log(person)


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output

// "first" = 2; "second" = 5; "third" = 2
console.log(first)
console.log(second)
console.log(third)

// i think this will be 5 and 2???; nope, it's basically a boolean question: does "first" = "second"?  of course not.  first and third?  yes, obv.
console.log(first == second);
console.log(first == third);


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output

// i think this will be all good.  Specifically... key:: value; secondKey:: [1, 5, 1, 8, 3, 3]; secondKey[0]:: 1; willThisWork:: 5. 
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


