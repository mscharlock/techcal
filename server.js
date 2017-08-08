'use strict';

const PORT = process.env.PORT || 3000;
let express = require('express');

let app = express();
app.use(express.static('./public'))

app.listen(PORT, function() {
  console.log(`'listening on PORT: ${PORT}'`)
});
