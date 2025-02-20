import { linkedList } from "./linkedList.js";

class hashMap {
    constructor(loadFactor, capacity){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        
        this.buckets = [];
    };
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };
     
        return hashCode % this.capacity;
      };
    set(value, key) {
        // iterate through all the nodes to see if the key name matches.
        // if the key exists, overwrite the value with the new value
        // if it does not, just add the key and bucket.
        // check to see if the array load factor has been reached, if it has, double the capacity.
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