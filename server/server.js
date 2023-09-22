const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
/*
commandline setup: 
npm init -y
npm install mongoose express dotenv
npm install cors
nodemon server.js
*/

const port = process.env.PORT;

require('./config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({extended: true}));

//replace *subjectname* and uncomment.
const UserRoutes = require('./routes/user.routes');
UserRoutes(app);

const GrillRoutes = require('./routes/grill.routes');
GrillRoutes(app);





app.listen( port, () => console.log(`Listening on port: ${port}`) );
