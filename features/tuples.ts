const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] = 'brown';

// type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
// pepsi[0] = 40; // error
