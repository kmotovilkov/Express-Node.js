var fs = require('fs');
var dataFile = 'storage.dat';
var data = {};

function validateString(key) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }
}

function validateKeyExists(key) {
    if (!data.hasOwnProperty(key)) {
        throw new Error('Key not found');
    }
}
var putItem = (key, value) => {
    validateString(key);
    if (data.hasOwnProperty(key)) {
        throw new Error('Duplicate key');
    }
    data[key] = value;
};
var getItem = (key) => {
    validateString(key);
    validateKeyExists(key);

    return data[key];
};
var updateItem = (key, value) => {
    validateString(key);
    validateKeyExists(key);
    data[key] = value;
};
var deleteItem = (key) => {
    validateString(key);
    validateKeyExists(key);
    delete data[key];
};
var clearItem = () => {
    data = {};
};
var saveItem = () => {
    var dataAsString = JSON.stringify(data);
    fs.writeFileSync(dataFile, dataAsString);
};
var loadItem = () => {
    var dataAsString = fs.readFileSync(dataFile, 'utf-8');
    data = JSON.parse(dataAsString);
};

module.exports = {
    putItem: putItem,
    getItem: getItem,
    updateItem: updateItem,
    deleteItem: deleteItem,
    clearItem: clearItem,
    saveItem: saveItem,
    loadItem: loadItem
};