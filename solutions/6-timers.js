import fs from 'fs';

// BEGIN
const watch = (filepath, timer, callback) => {
    const time = Date.now();
    const id = setInterval(() => {
        fs.stat(filepath, (error, stats) => {
            if (error) {
                clearInterval(id);
                callback(error);
                return;
            }
            let changeTime = stats.mtimeMs;
            if (changeTime > time) {
                callback(null);
            }
        })
    }, timer)
    return id;
}
export default watch;
// END
