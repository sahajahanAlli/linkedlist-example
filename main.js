
var LinkedlistMod=require('./linkedlist.js')

var linkedlistExample=new LinkedlistMod.LinkedList();


console.log('Adding two elements to the Queue : '+"50 , 40 , 30");
console.log('First element added at start is 50');
linkedlistExample.addAtStart(50);
console.log('Count after adding new element: '+linkedlistExample.getCount());
console.log('Second element added at start is 40');
linkedlistExample.addAtStart(40);
console.log('Count after adding new element: '+linkedlistExample.getCount());
console.log('Third element addition at index 1 is 30');
linkedlistExample.Add(1,30);
console.log('Count after adding new element: '+linkedlistExample.getCount());
console.log('Displaying all the elements in the linkedlist....')
console.log(linkedlistExample.displayAll());
console.log('Display element at index 2');
console.log(linkedlistExample.displayAt(2));
console.log('Remove element from 2 index position')
console.log(linkedlistExample.removeAt(2));
console.log('Remove element from start')
console.log(linkedlistExample.removeAtStart());
console.log('Displaying all the elements in the linkedlist after removal....')
console.log(linkedlistExample.displayAll());
