module.exports = {

    parseStringAsArray(string) {

        const arr = string.split(',').map(item => item.trim());

        return arr;
    }
}