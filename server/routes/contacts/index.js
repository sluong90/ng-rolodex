const express = require('express');
const router = express.Router();
const Contact = require('../.././database/models/Contact');


router.route('/contacts')
.get((req, res) => {
  console.log('HITTTTTTTT')
  return new req.database.Contact().fetchAll()
    .then((contacts) => {
      return res.json(contacts);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})

router.route('/create')
.post((req,res) => {
  console.log('HIT POST', req.body)
  const createNew = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    instagram: req.body.instagram
  }
  Contact
  .forge(createNew)
  .save()
  .then(() => {
    return Contact.fetchAll()
  })
  .then(contacts => {
    res.json(contacts)
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })

})

module.exports = router;