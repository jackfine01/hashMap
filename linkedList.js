class node
{
      constructor(key, value, nextNode)
      {
            this.key = key;
            this.value = value;
            this.nextNode = null;
      }
      key()
      {
            return this.key;
      }
      value()
      {
            return this.value;
      }
      nextNode()
      {
            return this.nextNode;
      }
}

class linkedList
{
      constructor(head, tail, size)
      {
            this.head = null;
            this.tail = null;
            this.size = 0;
      };
      append(key, value)
      {
            let newNode = new node(key, value);
            newNode.key = key;
            newNode.value = value;
            if(this.size==0)
            {
                  this.head = newNode;
                  this.tail = newNode;
            }
            else
            {
            let current = this.head;
            let previous;
            this.head = newNode;
            newNode.nextNode = current;
            while(current != null)
                  {
                        previous = current;
                        current = this.nextNode;
                  }
            }
            this.size++;
      };
      head()
      {
            return this.head;
      };
      tail()
      {
            return this.tail;
      };
      size()
      {
            return this.size;
      };
      containsKey(key)
      {
            let contain = false;
            let current = this.head;
            while(current!=null)
            {
                  if(current.key == key)
                        contain = true;
                  current = current.nextNode;
            };
            // console.log('contains ' + key + ': ' + contain);
            return contain;
      };
      containsValue(value)
      {
            let contain = false;
            let current = this.head;
            while(current!=null)
            {
                  if(current.value == value)
                        contain = true;
                  current = current.nextNode;
            };
            // console.log('contains ' + value + ': ' + contain);
            return contain;

      };
      findKey(key)
      {
            if(this.containsKey(key)==true)
            {
                  let index = 0;
                  let current = this.head;
                  while(current.key!=key)
                  {
                        index++;
                        current = current.nextNode;
                  };
                  // console.log('index of ' + key + ': ' +index)
                  return index;
            }
            else
                  console.log('DNE');
      };
      findValue(value)
      {
            if(this.containsValue(value)==true)
            {
                  let index = 0;
                  let current = this.head;
                  while(current.value!=value)
                  {
                        current = current.nextNode;
                        index++;
                  };
                  // console.log('index of ' + value + ': ' +index)
                  return index;
            }
            else
            {
                  console.log('DNE');
            };

      };
      at(index)
      {
            if(index>this.size)
            {
                  console.log('out of bounds');
            }
            else
            {
                  let current = this.head;
                  let count = 0;
                  while(count != index)
                  {
                        current = current.nextNode;
                        count++;
                  };
                  // console.log(current);
                  return current;
            };
      };
      toString()
      {
            let string = "";
            let current = this.head;
            while(current)
            {
                  string += " ( " + current.value + " ) ->"
                  current = current.nextNode;
            };
                  string += " null";
            // console.log(string);
      };
      remove(key)
      {
            if(!this.head)
            {
                  return;
            };
            if(this.head.key === key)
            {
                  this.head = this.head.nextNode;
                  this.size--;
                  return;
            }
            
            let current = this.head;
            while(current.nextNode)
            {
                  if(current.nextNode.key === key)
                  {
                        current.nextNode = current.nextNode.nextNode;
                        this.size--;
                        return;
                  }
                  current = current.nextNode;
            }

      };
};
export {linkedList}