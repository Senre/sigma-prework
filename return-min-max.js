import { readLines } from 'https://deno.land/std/io/mod.ts';

function returnMinMax(arr) {
    // set initial values for min and max with first array element to compare with the rest
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // reassign min and max depending on array's other elements
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}

async function replayRMM() {
    console.log("Enter 'end' to end");
    while (true) {
        console.log("Enter a range of numbers, each separated by ',' to find the min and max numbers:");
        const { value: input } = await readLines(Deno.stdin).next();
        if (input === 'end') {
            break;
        }
        const arr = input.split(',').map(num => parseInt(num));
        if (arr.some(num => isNaN(num))) {
            console.log("Invalid input. Try again Ex. '2,54,-18,43,13'");
        } else {
            console.log(returnMinMax(arr));
        }
    }
}

replayRMM();