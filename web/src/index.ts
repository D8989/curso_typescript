import { User } from './models/User';

const user = new User({ name: 'Daniel', age: 31 });

user.set({ age: 55 });

console.log(user.get('name'));
console.log(user.get('age'));
