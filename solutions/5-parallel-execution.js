import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (directoryPath, callback) => {
    let directorySize = 0;
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            callback(err);
            return;
        }
        const directoryFiles = files.map((file) => path.join(directoryPath, file))
        async.map(directoryFiles, fs.stat, (err, results) => {
            if (err) {
                callback(err);
                return;
            }
            else {
                directorySize = _.sumBy(results, (stat) =>
                {
                    if (stat.isFile())
                        return stat.size;
                    return 0;
                });
                callback(null, directorySize);
            }
        })
    })
}
// END
