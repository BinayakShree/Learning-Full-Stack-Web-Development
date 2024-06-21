/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const startTime = Date.now();
    const endTime = startTime + milliseconds;

    return new Promise((resolve, reject) => {
        while (Date.now() < endTime) {
            // Busy wait: Do nothing until endTime is reached
        }
        resolve();
    });
}

module.exports = sleep;