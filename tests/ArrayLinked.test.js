describe('ArrayList Methods', () => {

    describe('Push method in Array List', () => {

        it(`should return array length 6 includes added element `, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 6;
            const actual = alis.push(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 7 includes added elements `, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.push(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 8 includes added elements `, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.push(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 includes added elements `, () => {
            const alis = new Alisto();
            alis.arr = [];
            const expected = 1;
            const actual = alis.push(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 5 includes added elements in array : [1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.push();
            assert.strictEqual(actual, expected);
        });

        it(`should return array [1,2,3,4,5,2,2] includes added elements 2,2 in array : [1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5, 2, 2];
            alis.push(2, 2);
            const actual = alis.arr;
            assert.deepEqual(actual, expected);
        });
    });

    describe('Pop method in Array List', () => {

        it(`should return first element equals 5 includes added element in array : [1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });
        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new Alisto();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new Alisto();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });


    });

    describe('Shift method in Array List', () => {

        it(`should return first element equals 1 in array : [1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 1;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new Alisto();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new Alisto();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

    });

    describe('Unshift method in Array List', () => {

        it(`should return array length 6 includes added element in array : [1,1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 6;
            const actual = alis.unshift(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 7 includes added elements in array : [1,2,1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.unshift(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 8 includes added elements in array : [1,2,3,1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 8;
            const actual = alis.unshift(1, 2, 3);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 includes added elements in array : [1]`, () => {
            const alis = new Alisto();
            alis.arr = [];
            const expected = 0;
            const actual = alis.unshift();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 5 includes added elements in array : [1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.unshift();
            assert.strictEqual(actual, expected);
        });

        it(`should adds '0' to the beginning of array and returns length of array : [0,1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1,2,3,4,5];
            const expected = 6;
            const actual = alis.unshift(0);
            assert.strictEqual(actual, expected);
        });

        it(`should adds '-2,-1' elements to the beginning of array and returns length of array : [-2,-1,1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1,2,3,4,5];
            const expected = 7;
            const actual = alis.unshift(-2,-1);
            assert.strictEqual(actual, expected);
        });

        it(`should adds array [-3] to the beginning of an array and returns length of array : [[-3],1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1,2,3,4,5];
            const expected = 6;
            const actual = alis.unshift([-3]);
            assert.strictEqual(actual, expected);
        });

    });

    describe('Length method in Array List', () => {

        it(`should return array length 5 in array : [1,2,3,4,5]`, () => {
            const alis = new Alisto();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 in array : [1]`, () => {
            const alis = new Alisto();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });
        it(`should returns length 0 of array : []`, () => {
            const alis = new Alisto();
            alis.arr = [];
            const expected = 0;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 0 in array : []`, () => {
            const alis = new Alisto();
            alis.arr = [];
            const expected = 0;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

    });

    

});
