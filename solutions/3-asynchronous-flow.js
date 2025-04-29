import fs from 'fs';

// BEGIN
export const compareFileSizes = (firstFilepath, secondFilepath, callback) => {
    let firstSize, secondSize;
    fs.stat(firstFilepath, (_err, firstStats) => {
        firstSize = firstStats.size;
        fs.stat(secondFilepath, (_err, secondStats) => {
            secondSize = secondStats.size;
            callback(null, Math.sign(firstSize - secondSize));
        });
    });
};
// END