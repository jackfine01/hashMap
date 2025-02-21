import { hashMap } from "./hashMap.js"

const test = new hashMap(0.75,16) // or HashMap() if using a factory
console.log(test)
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
test.set('moon', 'silver')
test.set('moon', 'black')
test.set('hat', 'silver')
console.log(test)

//pushing additional tests

test.set('nectarine', 'orange');
test.set('orange', 'orange');
test.set('papaya', 'yellow');
test.set('quince', 'yellow');
test.set('raspberry', 'red');
test.set('strawberry', 'red');
test.set('tangerine', 'orange');
test.set('ugli fruit', 'green');
test.set('vanilla', 'cream');
test.set('watermelon', 'green/red');
test.set('xigua', 'red');
test.set('yam', 'orange');
test.set('zucchini', 'green');
console.log(test)


//pushing even more tests:

test.set('ant', 'black');
test.set('bee', 'yellow');
test.set('cat', 'gray');
test.set('deer', 'brown');
test.set('eagle', 'brown');
test.set('flamingo', 'pink');
test.set('gorilla', 'black');
test.set('hippo', 'gray');
test.set('iguana', 'green');
test.set('jaguar', 'yellow');
test.set('koala', 'gray');
test.set('lemur', 'black');
test.set('monkey', 'brown');
test.set('newt', 'green');
test.set('otter', 'brown');
test.set('panda', 'black/white');
test.set('quokka', 'brown');
test.set('rabbit', 'white');
test.set('snake', 'green');
test.set('turtle', 'green');
test.set('urchin', 'purple');
test.set('vulture', 'brown');
test.set('wolf', 'gray');
test.set('xerus', 'brown');
test.set('yak', 'black');
test.set('zebra', 'black & white');
console.log(test)

//throwing some crazy shit at it
test.set('vultsure', 'ebrown');
test.set('woldf', 'grasy');
test.set('xedrus', 'broqwn');
test.set('yaka', 'blacdk');
test.set('zebfra', 'blacak & white');
console.log(test)