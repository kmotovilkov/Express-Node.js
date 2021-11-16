var storage = require('./storage');


storage.putItem('first', 'first_value');
storage.putItem('second', 'second_value');

var someValue = storage.getItem('first');

// storage.updateItem('first', 'asdasdasd');
// storage.deleteItem('first');
// console.log(storage.getItem('first'));
storage.saveItem();