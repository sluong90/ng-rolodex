exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
  
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          { username: 'testuser1', name: 'test1', email: '', address: '' },
          { username: 'testuser2', name: 'test2', email: '', address: '' },
          { username: 'testuser3', name: 'test3', email: '', address: '' }
        ]);
      })
  
      .then(function () {
        // Inserts seed entries
        return knex('contacts').del()
          .then(function () {
            return knex('contacts').insert([
              {
                name: 'Bob A.',
                address: '123 ABC Street',
                mobile: '808-123-4567',
                work: '',
                home: '',
                email: 'bob@email.com',
                instagram: 'bob'
              },
              {
                name: 'Jane K.',
                address: '20 N Test Street',
                mobile: '',
                work: '',
                home: '808-987-6543',
                email: 'jane@email.com',
                instagram: ''
              },
              {
                name: 'Mars O.',
                address: '',
                mobile: '808-999-9999',
                work: '',
                home: '',
                email: '',
                instagram: 'mars'
              }
            ]);
          });
      })
  }
  