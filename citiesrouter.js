// get an instance of router

const express = require('express');
const router = express.Router();
//const router= require('./component/models/citiesmodels');

// router.get('/city',(req, res) => {
//   citiesModel.find((err, cities) => {
//       if (err) {
//           console.log('Error find users: ', error);
//           return res.status(500).json({ err: 'Error al consultar usuarios.'})
//       }
//       res.status(200).json({ cities: cities });
//   });
// });


// route with parameters (http://localhost:8080/hello/:name)
router.get('/test', function(req, res) {
    res.send('"msg: Test work"');
});

// apply the routes to our application

module.exports = router;
