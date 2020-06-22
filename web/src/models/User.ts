import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(
    'http://localhost:3000/users'
  );
  public attributes: Attributes<UserProps>;

  constructor(user: UserProps) {
    this.attributes = new Attributes<UserProps>(user);
  }

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on; // return an reference of the function;
  }

  get trigger() {
    return this.events.trigger;
  }

  set() {}

  fetch() {}

  save() {}
}
