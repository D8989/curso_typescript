import { User } from './models/User';

const user = new User({ name: 'newRecord', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.set({ name: 'novo nome' });
