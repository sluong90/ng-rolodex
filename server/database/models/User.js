const bookshelf = require('../bookshelf');

class User extends bookshelf.Model {
    get tableName() { return 'users'; }
    get hasTimestamps() { return true; }

    // users() {
    //     return this.hasMany('Contact', 'user_id');
    // }
}

module.exports = bookshelf.model('User', User);