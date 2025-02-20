import { linkedList } from "./linkedList";

class hashMap {
    constructor(loadFactor, capacity){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        
        let array = [];
    };
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        };
     
        return hashCode;
      };
    set(key,value) {
        // iterate through all the nodes to see if the key name matches.
        let hashCode = this.hash(key);
            if(this.array.length > 0){
                let i = 0;
                for(let i = 0; i < array.length; i++){
                    // if the key exists, overwrite the value with the new value
                    if(hashCode==array[i]){
                        array[i].value = value;
                    }
                }

            }
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