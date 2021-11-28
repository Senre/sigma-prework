import { readLines } from 'https://deno.land/std/io/mod.ts';

function howManyYearsAgo(myDate) {
    const dateStart = new Date(myDate);
    if (isNaN(dateStart.getTime())) {
        return "Invalid input, try again. Ex. '1999-10-29' for 1999 October 29th"
    }
    const dateNow = new Date();

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

    if (years < 0) {
        return "The date you have entered is in the future. Try again"
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
        console.log(howManyYearsAgo(input));
    }
}

replayHMYA();