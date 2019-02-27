var orm = require('../config/orm.js');

var burger = {
    selectAll: function (callback) {
        orm.selectAll('burgers', function (response) {
            callback(response);
        });
    },
    insertOne: function (burgerName, callback) {
        orm.insertOne('burgers', burgerName, function (response) {
            callback(response);
        })
    },
    updateOne: function (devoured, id, callback) {
        orm.updateOne('burgers', devoured, id, function (response) {
            console.log('Burger.js update');
            callback(response);
        });
    },
    deleteOne: function (id, callback) {
        orm.deleteOne('burgers', id, function (response) {
            console.log('burger.js delete');
            callback(response);
        })
    }
};

module.exports = burger;