import { hashMap } from "/hashMap.js"
let test = new hashMap(16, 0.75)
 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')
 
 test.set('lion', 'bronze')
 
 console.log(test.get('lion'))
 console.log(test.get('lionZ'))
 
 console.log(test.has('lion'))
 console.log(test.has('lionZ'))
 
 console.log(test.remove('lion'))
 console.log(test);
 console.log(test.remove('lion'))
 console.log(test);
 console.log(test.remove('elephant'))
 console.log(test);
 
 test.set('dragon','gold')
 test.set('hermit','purple');
 test.set('magician','red');
 test.set('star','platinum');
 test.set('chariot','silver');
 test.set('requiem','gold');
  test.set('apasple', 'red')
 test.set('banDana', 'yellow')
 test.set('carASrot', 'orange')
//  test.set('doDAg', 'brown')
//  test.set('elASDephant', 'gray')
//  test.set('froDASg', 'green')
//  test.set('grFDape', 'purple')
//  test.set('haZXt', 'black')
//  test.set('ice cream', 'white')
//  test.set('jackXCet', 'blue')
//  test.set('kitASe', 'pink')
 test.set('liEQon', 'golden')
 
 console.log(test.length());
 
//  test.clear();

 console.log(test.keys());
 console.log(test.values());
 console.log(test.entries());
 console.log(test);
//  test.clear()