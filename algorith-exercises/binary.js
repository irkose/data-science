// Linear Search
const list = [1,2,3,]
for (let i = 0; i < list.length; i++) {
    const item = list [i]
    if (item === 2) {
        console.log("Found 2");
    }
}

const linearSearch = (list, element) => {
    for (let i = 0; i < list.length; i++){
        const item = list[i];

        if (item === element) {
            return i;
        }
    }
};

// Binary Search: Is this number greater than the number in the list?
// Yes or no guessing number game splitting numbers in 2 parts with a tricky part (max>=min)
const binarySearch = (list, element) => {
    let min = 0;
    let max = list.length -1;
    while (max >= min) {
        const guess = Math.floor((min + max) / 2);

        if (list[guess] === element) {
            return guess;
        } else if (list[guess] < element) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }   
    }
    return -1;
};

/* Selection sort - swap the location of two defined items in an array.
Repeatedly select the next-smallest element and swaps it into place
*/
let swap = (arr, first_index, second_index) => {
    if(first_index < arr.length && second_index < arr.length) {
        let temp = arr[first_index];
        arr[first_index] = arr[second_index];
        arr[second_index] = temp;
    }
};

