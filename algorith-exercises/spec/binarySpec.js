describe('linearSearch', () => {
    it('it should return the index of the element', () => {
        const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        const element = 70;

        const result = linearSearch(list, element);
        expect(result).toBe(6);
    })
});

describe('binarySearch', () => {
    describe('when the element exists in the list', () => {
        it('should return the index of the element', () => {
            const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
            const element = 70;
            const result = binarySearch(list, element);
            expect(result).toBe(6)
        });
    });
    describe('when element does not exist in the list', () => {
        it('should return -1', () => {
            const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
            const element = 77;
            const result = binarySearch(list, element);
            expect(result).toBe(-1)
        });
    });
});
