const express=require('express');
const app= express();
const citiesRoutes = require('./component/router/citiesrouter')

// app.get('/api', function(req, res) {
//   res.send('ciudades!');  
// });

app.use('/api', citiesRoutes);
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});




