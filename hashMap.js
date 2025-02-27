import {linkedList} from "/linkedList.js"
class hashMap
{
      constructor(capacity, loadFactor, buckets)
      {
            this.capacity = capacity;
            this.loadFactor = loadFactor;
            this.buckets = [];
      };
      hash(key)
      {
         let hashCode = 0;
              
         const primeNumber = 31;
         for (let i = 0; i < key.length; i++) {
             hashCode = primeNumber * hashCode + key.charCodeAt(i);
         }
         return hashCode % this.capacity;
      }
      rehash()
      {
            let newBuckets = [];
            for(let i = 0; i < this.buckets.length; i++)
            {
                  if(this.buckets[i])
                  {
                        let current = this.buckets[i].head;
                        while(current)
                        {
                              console.log(current);
                              let arr = [current.key,current.value];
                              newBuckets.push(arr);
                              current = current.nextNode;
                        };
                  };
            };
            this.buckets = [];
            for(let j = 0; j < newBuckets.length; j++)
            {
                  this.set(newBuckets[j][0],newBuckets[j][1]);
            };
      };
      set(key, value)
      {
            let hashIndex = this.hash(key);
                  if(!this.buckets[hashIndex])
                  {
                        let list = new linkedList();
                        this.buckets[hashIndex] = list;
                  };
                  if(this.buckets[hashIndex].containsKey(key))
                  {
                        this.buckets[hashIndex].at(this.buckets[hashIndex].findKey(key)).value = value;
                  }
                  else
                        this.buckets[hashIndex].append(key, value);
            let capCheck = 0;
                  for(let i = 0; i < this.buckets.length; i++)
                  {
                        if(this.buckets[i])
                        {
                              capCheck++;
                        };
                  };
                  if(capCheck/this.capacity > this.loadFactor)
                  {
                        this.capacity = this.capacity*2
                        this.rehash();
                  };
      };
      get(key)
      {
      let hashIndex = this.hash(key);
            if(!this.buckets[hashIndex])
                  return null;
            if(this.buckets[hashIndex].containsKey(key))
                  return this.buckets[hashIndex].at(this.buckets[hashIndex].findKey(key)).value;
            else
                  return null;
      };
      has(key)
      {
            let hashIndex = this.hash(key);
            if(!this.buckets[hashIndex])
                  return false;
            if(this.buckets[hashIndex].containsKey(key))
                  return true;
            else
                  return false;
      };
      remove(key)
      {
            if(this.has(key))
            {
                  let hashIndex = this.hash(key);
                  this.buckets[hashIndex].remove(key)
                  this.rehash();
                  return true;
            }
            else
                  return false;
      };
      length()
      {
            let count = 0;
            for(let i =0; i<this.buckets.length; i++)
            {
                  if(this.buckets[i])
                        count += this.buckets[i].size
            };
            return count;
      };
      clear()
      {
            for(let i = 0; i<this.buckets.length; i++)
            {
                  if(this.buckets[i])
                  {
                        for(let j = 0; j < this.buckets[i].size+1; j++)
                        {     
                              let key = this.buckets[i].head.key;
                              this.buckets[i].remove(key);
                        };
                  };
            };
            this.rehash();
      };
      keys()
      {
            let arr = [];
                  for(let i = 0; i<this.buckets.length; i++)
            {
                  if(this.buckets[i])
                  {
                        for(let j = 0; j < this.buckets[i].size; j++)
                        {
                              arr.push(this.buckets[i].at(j).key);
                        };
                  };
            };
            return arr;
      };
      values()
      {
            let arr = [];
                  for(let i = 0; i<this.buckets.length; i++)
            {
                  if(this.buckets[i])
                  {
                        for(let j = 0; j < this.buckets[i].size; j++)
                        {
                              arr.push(this.buckets[i].at(j).value);
                        };
                  };
            };
            return arr;
      };
      entries()
      {
            let arr = [];
                  for(let i = 0; i<this.buckets.length; i++)
            {
                  if(this.buckets[i])
                  {
                        for(let j = 0; j < this.buckets[i].size; j++)
                        {
                              let subArr = [];
                              subArr.push(this.buckets[i].at(j).key);
                              subArr.push(this.buckets[i].at(j).value);
                              arr.push(subArr);
                        };
                  };
            };
            return arr;
      };
};
export {hashMap}
