const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('albums/index', {title: 'Albums'});
});

router.get('/new', (req, res, next) => {
  res.render('albums/new', {title: 'New Album'});
});

router.post('/albums', (req, res, next) => {
  res.redirect('/albums');
});

module.exports = router;
