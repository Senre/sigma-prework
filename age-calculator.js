import { readLines } from 'https://deno.land/std/io/mod.ts';

function howManyYearsAgo(myDate) {
    const dateNow = new Date();
    const dateStart = new Date(myDate);

    let years = dateNow.getFullYear() - dateStart.getFullYear();
    // check difference purely from year dates
    if (dateStart.getMonth() > dateNow.getMonth()) {
        // check if the start date's month has passed this year
        years--;
    } else if (dateStart.getMonth() === dateNow.getMonth()) {
        if (dateStart.getDate() > dateNow.getDate()) {
            // if in the same month, check if the month day has been passed this year
            years--;
        }
    }
    return years;
}

async function replayHMYA() {
    console.log("Enter 'end' to end");
    while (true) {
        console.log("Enter a date to find how many years ago it was (year-month-day):");
        const { value: input } = await readLines(Deno.stdin).next();
        if (input === 'end') {
            break;
        }

        const yearsDiff = howManyYearsAgo(input);
        if (isNaN(yearsDiff)) {
            console.log("Invalid input, try again. Ex. '1999-10-29' for 1999 October 29th");
        } else {
            console.log(yearsDiff);
        }
    }
}

replayHMYA();

// change when date is in the future