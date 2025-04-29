import fs from 'fs';

// BEGIN
export const move = (filepathFrom, filepathTo, callback) => {
    fs.readFile(filepathFrom, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        fs.writeFile(filepathTo, data, (err) => {
            if (err) {
                callback(err);
                return;
            }
            fs.unlink(filepathFrom, (err) => {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null);
            });
        });
    });
}
// END
