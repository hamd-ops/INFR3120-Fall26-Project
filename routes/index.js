let express = require('express');
let router = express.Router();

let items = [
  {
    name: 'AirPods',
    type: 'Lost',
    location: 'Library',
    description: 'White AirPods case.'
  },
  {
    name: 'Wallet',
    type: 'Found',
    location: 'Cafeteria',
    description: 'A black wallet.'
  }
];

router.get('/', function(req, res) {
  res.render('layout', {
    title: 'Home',
    page: 'index',
    items: items,
    message: ''
  });
});

router.post('/report', function(req, res) {
  let item = {
    name: req.body.name,
    type: req.body.type,
    location: req.body.location,
    description: req.body.description
  };

  items[items.length] = item;

  res.redirect('/#items');
});

module.exports = router;