class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyList {

    constructor() {
        this._length = 0;
        this.head = null;
    }

    indexOf(element) {

        let count = 0;
        let current = this.head;
        let flag = 0;

        // iterae over the list
        while (current != null && flag !=1 ) {
            // compare each element of the list
            // with given element
            if (JSON.stringify(current.data) === JSON.stringify(element)) {
                flag+=1;
                return count;
            }

            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    push(data) {


        let node = new Node(data),
            currentNode = this.head;
        // 1-ый случай: пустой список
        if (!currentNode) {
            this.head = node;
            this._length++;

            return node.data;
        }
        // 2-ой случай: не пустой список
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this._length++;
        return node.data;
    }

    unshift(data) {
        let tempNode = this.head;
        this.head = new Node(data);
        this.head.next = tempNode;
        this._length++;
        return this._length;
    }

    pop() {

        let lastNode = this.head;
        let beforeLastNode = this.head;
        let deleteNode;

        if(this._length == 0){
            return null;
        }

        if(this._length == 1){
            deleteNode = this.head;
            this.head = null;
            this._length = 0;
            return deleteNode.data;
        }

        for (let i = 1; i < this._length; i++) {
            lastNode = lastNode.next;
        }
        for (let i = 1; i < this._length - 1; i++) {
            beforeLastNode = beforeLastNode.next;
        }
        beforeLastNode.next = null;
        deleteNode = lastNode;
        lastNode = null;
        this._length--;
        return deleteNode.data;

    }

    shift() {

        if(this._length == 0){
            return null;
        }

        let firstNode = this.head;
        this.head = this.head.next;
        let deleteNote = firstNode;
        firstNode = null;
        this._length--;
        return deleteNote.data;
    }

   
    length() {
        return this._length;
    }

  

    toString() {

        let outStringArr = [];
        let currentNode = this.head;
        for (let i = 0; i < this._length; i++) {
            outStringArr.push(currentNode[`data`]);
            currentNode = currentNode.next;
        }
        return outStringArr.toString();
    }

}





