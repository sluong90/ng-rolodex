const bookshelf = require('../bookshelf');

class Contact extends bookshelf.Model {
  get tableName() { return 'contact'; }
  get hasTimestamps() { return true; }

  users() {
    return this.belongsTo('Users', 'created_by');
  }
}

module.exports = bookshelf.model('Contact', Contact);