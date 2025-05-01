import fsp from 'fs/promises';

// BEGIN
export const getTypes = (filepathArray) => {
    return Promise.all(filepathArray.map(path => fsp.stat(path)
            .then(stat => stat.isDirectory() ? 'directory' : 'file')
            .catch(() => null)
        )
    );
}
// END