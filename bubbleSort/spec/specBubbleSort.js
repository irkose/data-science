describe('bubbleSort', () => {
    it('should sort the list', () => {
        const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
        const result = bubbleSort(numbers);
        const expected = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
        expect(result).toEqual(expected);
    });
});

const selectionSort = (list) => {
    for (let i - 0; i < list.length - 1; i++) {
        let smallestValue = list[i]
        let smallestIndex = i;
        for (let j =i = 1; j < list.length; j++) {
            if (list[j] < smallestvalue) {
                smallestValue = list[j]; 
                smallestIndex = j;
            }
        }
        swap(list, i, smallestIndex);test?
    }
    return list;
};
 
// const find = (list, element) => {
//     const sorted = selectionSort(list); 
//     return binarySearch 
// }