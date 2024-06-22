// const a = "24 June 2024 10:00 PM";
// document.getElementById('time').innerText = a;

// function clock() {
//     const now = new Date();
//     const prev = new Date(a);
//     const diff = prev - now; // Difference in milliseconds

//     const input = document.querySelectorAll('input');

//     // Calculate the difference in days, hours, minutes, and seconds
//     const diffInSeconds = Math.floor(diff / 1000);
//     const days = Math.floor(diffInSeconds / (3600 * 24));
//     const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
//     const minutes = Math.floor((diffInSeconds % 3600) / 60);
//     const seconds = diffInSeconds % 60;

//     input[0].value = days;
//     input[1].value = hours;
//     input[2].value = minutes;
//     input[3].value = seconds;

//     console.log("Current Date and Time: ", now);
//     console.log("Parsed Date and Time: ", prev);
// }

// clock();
// setInterval(clock,1000)

const endDate = "24 June 2024 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)