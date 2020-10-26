/* With each pass the furthest item in the array will be the largest. 
It is bubbling to the top all the way up.
Check the pair of numbers in the list, if they are not in order, swop them. 
*/

const bubbleSort = list => {
  for (let j = 0; j < list.length; j++) {
      for (let i = 0; i < list.length-1; i++) {
      const currentNumber = list[i];
      const nextNumber = list[i + 1]

      if (nextNumber < currentNumber) {
        list[i] = nextNumber;
        list[i + 1] = currentNumber;
      }
    }
  }
 return list;
};

/* Selection Sort - 

*/
describe ('selectionSort', () => {
  it('should sort the list', () => {
      const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
      const result = selectionSort;
      const expected = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
      expect(result).toEqual(expected);
  });
});

// describe ('find', () => {
//     it('should find the index of an elemnt in the list', () => {
//         const list = [{taskid}]
//     })
// })