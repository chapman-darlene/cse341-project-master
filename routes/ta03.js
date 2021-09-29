//TA03 PLACEHOLDER
// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.render('pages/ta03', {
//     title: 'Team Activity 03',
//     path: '/ta03', // For pug, EJS
//     activeTA03: true, // For HBS
//     contentCSS: true, // For HBS
//   });
// });

//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const ta03Controller = require('../controllers/ta03.js');

router.get('/', ta03Controller.getProducts);
router.get('/search', ta03Controller.getSearchProducts);

module.exports = router;