class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything(['a', 'b', 'c']); // ArrayOfAnything<string>(['a', 'b', 'c'])

// example of generics with functions

function printStringd(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything(['a', 'b', 'c']); // printAnything<string>(['a', 'b', 'c']);

// Generic Constrains

class Car {
  print() {
    console.log('I am a Car.');
  }
}

class House {
  print() {
    console.log('I am a House.');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCar([new House(), new House()]);
printHouseOrCar([new Car(), new Car()]);
printHouseOrCar([new Car(), new House()]);
