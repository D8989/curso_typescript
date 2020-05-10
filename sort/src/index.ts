import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharaqctersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const characters = new CharaqctersCollection('Xaayb');
const linkList = new LinkedList();
linkList.add(500);
linkList.add(-10);
linkList.add(-3);
linkList.add(4);

//const sorter = new Sorter(numbersCollection);
// const sorter = new Sorter(characters);
const sorter = new Sorter(linkList);

linkList.print();
sorter.sort();
linkList.print();
