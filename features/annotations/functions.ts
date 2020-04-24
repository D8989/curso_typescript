const add = (a: number, b: number): number => {
  return a + b;
};

// (a: number, b: number) => void
const subtratct = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};
/* // op1
 * const logWeather = (forecast: { date: Date; weather: string }): void => {
 *   console.log(forecast.date);
 *   console.log(forecast.weather);
 * };
 */

// op 2
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
