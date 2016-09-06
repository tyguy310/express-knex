const router = require('express').Router();
const knex = require('../db/knex');

function Albums() { return knex('albums'); }

router.get('/', (req, res, next) => {
  res.render('albums/index', {title: 'Albums'});
});

router.get('/new', (req, res, next) => {
  res.render('albums/new', {title: 'New Album'});
});

router.get('/', (req, res, next) => {
  Albums().select().then(records => {
    res.render('albums/index', {
      title: 'Albums',
      albums: records
    });
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  Albums().insert({
    name: req.body.name
    })
  .then(() => {
    res.redirect('/albums');
  });
});

module.exports = router;
