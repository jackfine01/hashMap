class hashMap {
    constructor(loadFactor, capacity){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
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
        // if the key exists, overwrite the value with the new value
        //
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