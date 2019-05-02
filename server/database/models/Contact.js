const bookshelf = require('../bookshelf');

class Contact extends bookshelf.Model {
  get tableName() { return 'contacts'; }
  get hasTimestamps() { return true; }

 
}

module.exports = bookshelf.model('Contact', Contact);