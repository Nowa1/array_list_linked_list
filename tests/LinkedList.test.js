const linkedlist = new SinglyList();
linkedlist.push([1, 2, 3]);
linkedlist.push([5, 6, 7, 8]);
linkedlist.push({
    name: `Alex`,
    age: 30
});
linkedlist.push(`hello`);
linkedlist.push(999999);
linkedlist.push(`bool`);
linkedlist.push(null);
linkedlist.push(undefined);

describe('LinkedListNode', () => {
    it('should create linkedlist node with node.data: undefined', () => {
        const node = new Node();

        assert.strictEqual(node.data, undefined);

    });
    it('should create linkedlist node with node.next: null', () => {
        const node = new Node();

        assert.strictEqual(node.next, null);

    });
    it('should create linkedlist node with node.data value([1,2,3])', () => {
        const node = new Node([1, 2, 3]);

        assert.deepEqual(node.data, [1, 2, 3]);
        assert.deepEqual(node.next, null);

    });
    it('should create linkedlist node with object value ({key: 3456, map:`Hello`})', () => {
        const node = new Node({
            key: 3456,
            map: `Hello`
        });

        assert.deepEqual(node.data.key, 3456);
        assert.deepEqual(node.data.map, `Hello`);
        assert.deepEqual(node.next, null);

    });
});


describe("LinkedList constructor", function () {

    const linkedlist = new SinglyList();
    it("should create empty linked list", function () {
        assert.equal(linkedlist.head, null);
        assert.equal(linkedlist._length, 0);
    });

    const testData = [{
        expected: `indexOf`
    }, {
        expected: `push`
    }, {
        expected: `unshift`
    }, {
        expected: `pop`
    }, {
        expected: `shift`
    }, {
        expected: `length`
    }, {
        expected: `toString`
    },  ];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        it(`should has LinkedList method --> ${expected}`, function () {
            assert.property(linkedlist, expected);

        });
    });
});

describe(`LinkedList Methods`, function () {
    describe(`LinkedList method --> Index Of(element)`, function () {
        const testData = [{
            element: [1, 2, 3],
            expected: 0
        }, {
            element: [5, 6, 7, 8],
            expected: 1
        }, {
            element: {
                name: `Alex`,
                age: 30
            },
            expected: 2
        }, {
            element: `hello`,
            expected: 3
        }, {
            element: 999999,
            expected: 4
        }, {
            element: 'bool',
            expected: 5
        }, {
            element: null,
            expected: 6
        }, {
            element: undefined,
            expected: 7
        }, {
            element: `world`,
            expected: -1
        }];

        testData.forEach(function (data) {
            const {
                element,
                expected
            } = data;
            it(`should return index = ${expected} of argument node ${element} in LinkedList --> ${linkedlist.printList()}`, function () {

                const actual = linkedlist.indexOf(element);

                assert.deepEqual(actual, expected);

            });
        });
    });

    describe(`LinkedList method --> Pop()`, function () {
        const testData = [{
            expected: null

        }, {
            expected: [1, 2, 3]

        }, {
            expected: [5, 6, 7, 8]

        }, {
            expected: {
                name: `Alex`,
                age: 30
            }

        }, {
            expected: `hello`

        }, {
            expected: 999999

        }, {
            expected: 'bool'

        }, {
            expected: null

        }, {
            expected: undefined

        }];

        testData.reverse();

        testData.forEach(function (data) {
            const {
                expected
            } = data;
            it(`should return element = ${expected} in LinkedList --> ${linkedlist.printList()}`, function () {

                const actual = linkedlist.pop();

                assert.deepEqual(actual, expected);

            });
        });
    });

    describe(`LinkedList method --> Shift()`, function () {

        const linkedlist = new SinglyList();
        linkedlist.push([1, 2, 3]);
        linkedlist.push([5, 6, 7, 8]);
        linkedlist.push({
            name: `Alex`,
            age: 30
        });
        linkedlist.push(`hello`);
        linkedlist.push(999999);
        linkedlist.push(`bool`);
        linkedlist.push(null);
        linkedlist.push(undefined);

        const testData = [{
            expected: [1, 2, 3],
            expectedLength: 7
        }, {
            expected: [5, 6, 7, 8],
            expectedLength: 6
        }, {
            expected: {
                name: `Alex`,
                age: 30
            },
            expectedLength: 5
        }, {
            expected: `hello`,
            expectedLength: 4
        }, {
            expected: 999999,
            expectedLength: 3
        }, {
            expected: 'bool',
            expectedLength: 2
        }, {
            expected: null,
            expectedLength: 1
        }, {
            expected: undefined,
            expectedLength: 0
        }, {
            expected: null,
            expectedLength: 0
        }];


        testData.forEach(function (data) {
            const {
                expected,
                expectedLength
            } = data;
            it(`should return element = ${expected} in LinkedList --> ${linkedlist.printList()}`, function () {

                const actual = linkedlist.shift();
                const actualLength = linkedlist._length;

                assert.deepEqual(actual, expected);
                assert.deepEqual(actualLength, expectedLength);

            });
        });
    });

   
    describe(`LinkedList method --> Search Node At (position)`, function () {
        describe(`Search Node At (position) with normal position`, function () {
            const linkedlist = new SinglyList();
            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);

            const testData = [{
                expected: [1, 2, 3],
                position: 1

            }, {
                expected: 999999,
                position: 5
            }, {
                expected: null,
                position: 7
            }];


            testData.forEach(function (data) {
                const {
                    expected,
                    position
                } = data;
                it(`should return node ${expected} with position ${position} in LinkedList --> ${linkedlist.printList()}`, function () {

                    const actual = linkedlist.searchNodeAt(position);
                    assert.deepEqual(actual.data, expected);

                });
            });
        });



        describe(`Search Node At (position) with wrong position`, function () {
            testData = [-120, 0, null, undefined];

            testData.forEach(function (data) {
                it(`should throw Error when position is ${data}`, function () {
                    assert.throw(function () {
                        linkedlist.searchNodeAt(data);
                    }, 'Failure: non-existent node in this list.');
                });
            });
        });



    });

  
    describe(`LinkedList method --> Length()`, function () {
        const linkedlist = new SinglyList();

        const testData = [{
            element: [1, 2, 3],
            expected: 1
        },
            {
                element: [1, 2, 3, 5],
                expected: 2
            }, {
                element: `[1,2,3,5]`,
                expected: 3
            }
        ];

        testData.forEach(function (data) {
            const {element, expected} = data;
            it(`should return length = ${expected} of LinkedList`, function () {
                linkedlist.push(element);
                assert.deepEqual(expected, linkedlist._length);
            });
        });
    });

   

    describe(`LinkedList method --> Push(element)`, function () {
        const testData = [{
            element: [1, 2, 3],
            expected: [1, 2, 3]
        }, {
            element: [5, 6, 7, 8],
            expected: [5, 6, 7, 8]
        }, {
            element: {
                name: `Alex`,
                age: 30
            },
            expected: {
                name: `Alex`,
                age: 30
            }
        }, {
            element: `hello`,
            expected: `hello`
        }, {
            element: 999999,
            expected: 999999
        }, {
            element: 'bool',
            expected: 'bool'
        }, {
            element: null,
            expected: null
        }, {
            element: undefined,
            expected: undefined
        }];

        testData.forEach(function (data) {
            const {
                element,
                expected
            } = data;
            it(`should return element = ${expected} after push in LinkedList`, function () {

                const actual = linkedlist.push(element);

                assert.deepEqual(actual, expected);

            });
        });
    });

    describe(`LinkedList method --> Unshift(element)`, function () {
        const testData = [{
            element: [1, 2, 3],
            expected: 1
        }, {
            element: [5, 6, 7, 8],
            expected: 2
        }, {
            element: {
                name: `Alex`,
                age: 30
            },
            expected: 3
        }, {
            element: `hello`,
            expected: 4
        }, {
            element: 999999,
            expected: 5
        }, {
            element: 'bool',
            expected: 6
        }, {
            element: null,
            expected: 7
        }, {
            element: undefined,
            expected: 8
        }];

        const linkedlist = new SinglyList();

        testData.forEach(function (data) {
            const {
                element,
                expected
            } = data;
            it(`should return LinkedList length = ${expected} after add element --> ${element}`, function () {

                const actual = linkedlist.unshift(element);

                assert.deepEqual(actual, expected);

            });
        });
    });

    describe(`LinkedList method --> Splice(index, deleteCount, elem1, ...elem[N])`, function () {
        const testData = [{
            index: 0,
            deleteCount: 0,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 0,
            expectedNode: null
        }, {
            index: 0,
            deleteCount: 0,
            insertEl1: '',
            insertEl2: '',
            expected: 0,
            expectedNode: null
        }, {
            index: 0,
            deleteCount: 1,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 1,
            expectedNode: [1,2,3,4]
        }, {
            index: 0,
            deleteCount: 2,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 2,
            expectedNode: [1,2,3]
        }, {
            index: 0,
            deleteCount: 5,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 5
        },  {
            index: 1,
            deleteCount: 2,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 2
        }, {
            index: 3,
            deleteCount: 0,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 0
        }, {
            index: 5,
            deleteCount: 2,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 2
        },];



        testData.forEach(function (data) {
            const {
                index,
                deleteCount,
                insertEl1,
                insertEl2,
                expected,
                expectedNode
            } = data;
            const linkedlist = new SinglyList();
            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);

            it(`should return new LinkedList (length=${expected}) with remove element of index = (${index}) if deleteCount = (${deleteCount}), and add (${insertEl1}) and add (${insertEl2})`, function () {
                const actual = linkedlist.splice(index, deleteCount, insertEl1, insertEl2);
                assert.deepEqual(actual._length, expected);

            });
        });
    });
});
