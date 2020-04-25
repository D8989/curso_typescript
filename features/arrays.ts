const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help eith inferenc when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100); // error

// hel with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

carMakers.map((c) => c.toLowerCase());

// flexible types
const importantDate = [new Date(), '2030-10-10'];
importantDate.push('2030-10-10');
importantDate.push(new Date());
// importantDate.push(100); // error
