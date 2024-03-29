//Singly Linked List 
class node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail  = null;
        this.length = 0;
    }
    push(val){
        var newNode = new node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
         let currentHead = this.head
        this.head = currentHead.next
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return currentHead
    
    }
    unshift(val){
        let newNode = new node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
        newNode.next = this.head 
        this.head = newNode
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 ||  index >= this.length ) return null;
    }
    
    
}

var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)

console.log(list)