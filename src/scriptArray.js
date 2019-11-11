function Alisto(){
    this.arr = [];
    this.pop = function (){
        if(this.arr.length === 0){
            return undefined;
        }
        let lastElement = this.arr[this.arr.length-1]
        this.arr.length = this.arr.length -1;
        return lastElement;
    }
    this.push = function(){
        for (let i = 0; i < arguments.length; i++) {
            this.arr[this.arr.length] = arguments[i];
        }
        return this.arr.length;
    }
    this.shift = function (){
        if(this.arr.length === 0){
            return undefined;
        }
        let firstEl = this.arr[0];
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i+1];
        }
        this.arr.length = this.arr.length - 1;
        return firstEl;
    }
    this.unshift = function (){
        for (let i = 0; i < arguments.length; i++) {
            for (let j = this.arr.length; j > 0 ; j--) {
                this.arr[j] = this.arr[j-1];
            }
            this.arr[0] = arguments[i];
        }
        return this.arr.length;
    }
    this.length = function (){
        let i = -1;
        for (let key in this.arr) {
            i = key;
        }
        return +i+1;
    };
    
}