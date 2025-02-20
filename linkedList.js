class linkedList {
    constructor(head, tail, size){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value){
        let node = new Node();
        let current;
        node.value = value;
        if (this.tail == null && this.head == null){
            this.head = node;
            this.tail = node;
        }
        else {
            current = this.tail;
            current.nextNode = node;
            this.tail = node;
        };
        this.size++;
    }
    prepend(value){
        let node = new Node(element);
        let current;
        node.value = value;
        if (this.head == null){
            this.head = node;
            this.tail = node;
        }
        else{
            current = this.head;
            this.head = node;
            node.nextNode = current;
        }
        this.size++;
    }
    size(){
        return this.size;
    }
    head(){
        return this.head;
    }
    tail(){
        return this.tail;
    }
    at(index){
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.nextNode;
        }
        return current.value;
    }
    pop(){
        if(this.size > 1){
            let current = this.head();
            for(let i = 0; i<size-1; i++){
                current = this.nextNode;
            }
            current.nextNode = null;
            this.size--;
        }
        else if(this.size == 1){
            this.head = null;
            this.tail = null;
        }
        else if(this.size == 0){
            console.log('There are no more nodes.')
        }

    }
    contains(value){
        let current = this.head;
        let isIn = false;
            while(current != null){
                if(current.value == value){
                    console.log(current.value)
                    isIn = true;
                }
                current = current.nextNode;
            }
        return isIn;
        }
    find(value){
        let current = this.head;
        let index = 0;
            while(current.value != value && current.value != null){
                index++;
                current = current.nextNode;
            }
            console.log("Index of " + value + ": " + index)
            return index;
    }
    toString(){
        let current = this.head;
        let string = "";

        while (current) {
            string += current.value + (current.nextNode ? " ->  " : "")
            current = current.nextNode;
        }
        return string;
    }
}
export{linkedList}

class Node {
    constructor(key, value, nextNode) {
        this.value = null;
        this.nextNode = null;
        this.key = key;
    }
    value(){
        return this.value;
    }
    nextNode(){
        return this.nextNode;
    }
}
export{Node}