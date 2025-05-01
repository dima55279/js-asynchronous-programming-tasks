import fsp from 'fs/promises';

// BEGIN
export const reverse = (file) => {
    return fsp.readFile(file, 'utf8')
        .then((content) => content.split('\n').reverse().join('\n'))
        .then((content) => fsp.writeFile(file, content))
}
// END