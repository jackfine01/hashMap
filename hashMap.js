import { linkedList } from "./linkedList.js";

class hashMap {
    constructor(loadFactor, capacity){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        
        this.buckets = new Array(this.capacity);
    };
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };
     
        return hashCode % this.capacity;
      };
    set(key, value) {
      let hashCode = this.hash(key);
      let hashIndex = this.buckets[hashCode];
          if(hashIndex != undefined){
            let contains = this.buckets[hashCode].containsKey(key);
              if(contains == true){
                index = this.buckets[hashCode].find(key)
                this.buckets[hashCode].at(index).value = value;
              }
              else if(contains == false){
                this.buckets[hashCode].append(key, value);
              }
            }
            else if(hashIndex == undefined){
              let list = new linkedList();
              list.append( key , value );
              this.buckets[hashCode] = list;
            }
      // check to see if the array load factor has been reached, if it has, double the capacity.
        let capCheck = this.buckets.length / this.capacity;
          if(capCheck > this.loadFactor){
            this.capacity = this.capacity*2;
          }
    };
    get(key) {

    };
    has(key) {

    };
    remove() {

    };
    length() {

    };
    clear() {

    };  
    keys(){

    };
    values(){

    };
    entries(){

    };
};

export { hashMap };