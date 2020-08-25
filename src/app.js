const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors=require('cors');

const app = express();

app.use(cors({origin:true,credentials: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to use for all requests
router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Expose-Headers', 'X-My-Custom-Header, X-Another-Custom-Header');
  next(); // make sure we go to the next routes and don't stop here
});

router.use('/user', require('./controllers/UserController'));
router.use('/event', require('./controllers/EventController'));
router.use('/chat', require('./controllers/ChatController'));
router.use('/artist', require('./controllers/ArtistController'));
router.use('/message', require('./controllers/MessageController'));
router.use('/notification', require('./controllers/NotificationController'));

app.use('/api',router);

app.use(function(req, res, next){
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    res.send({ error: 'Route Not found' });
    return;
  }
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Route Not found' });
    return;
  }
  // default to plain-text. send()
  res.type('txt').send('Not found');
});

module.exports = app;
