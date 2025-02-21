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
        return hashCode % this.buckets.length;
      };
    set(key, value) {
      let hashCode = this.hash(key);
      let hashIndex = this.buckets[hashCode];
          if(hashIndex != undefined){
            let contains = this.buckets[hashCode].containsKey(key);
              if(contains == true){
                let index = this.buckets[hashCode].findKey(key)
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
        let size = 0;
        for(let i = 0; i < this.buckets.length; i++){
          if(this.buckets[i]!=undefined){
            size++;
          }
        }
        let capCheck = size / this.capacity;

        if(capCheck > this.loadFactor){

          this.capacity = this.capacity*2;

          let current = this.buckets;

          this.buckets = new Array(this.capacity)

          for(let i = 0; i < current.length; i++){
            if(current[i]!=undefined){
              for(let j = 0; j < current[i].size; j++){
                this.set(current[i].at(j).key, current[i].at(j).value)
              }
            }
          }
        }
    };
    get(key) {
      let hashCode = this.hash(key);
      let hashIndex = this.buckets[hashCode];
        if(hashIndex != undefined){
          let index = hashIndex.findKey(key);
          return hashIndex.valueAt(index);
        }else{
          return null;
        }
    };
    has(key) {
      let hashCode = this.hash(key);
      let hashIndex = this.buckets[hashCode];
        if(hashIndex != undefined){
          return hashIndex.containsKey(key);
        }else{
          return false;
        }
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