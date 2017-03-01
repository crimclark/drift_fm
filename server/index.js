const express = require('express');
const app = express();


app.set('port', (process.env.PORT || 3001));

app.get('/test', (req, res) => {
  res.json('hi');
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
