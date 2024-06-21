const fs = require('fs');

fs.readFile('Week-2/Async JS Assignement/easy/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
