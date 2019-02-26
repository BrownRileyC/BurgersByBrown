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
    updateOne: function (id, callback) {
        orm.updateOne('burgers', id, function (response) {
            callback(response);
        });
    }
};

module.exports = burger;