const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contacts');
const decorator = require('./database/decorator');

// data vars
const PORT = process.env.PORT || 8080;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) { console.log('No Port Found'); }
if (!SESSION_SECRET) { console.log('No Session Secret Found'); }
if (!REDIS_HOSTNAME) { console.log('No Redis Hostname Found'); }
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) { return process.exit(1); }

// setup server middleware
const app = express();
app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));


// decorate request with database
app.use(decorator);

// routes
app.use('/api', userRoutes, contactRoutes);
app.get('/api/smoke', (req, res) => {
  res.json({ smoke: 'test' });
});


app.post('/api/login', (req,res) => {
  const user = req.body;
  return res.json(user);
});

app.post('/api/register', (req,res) => {
  const user = req.body;
  return res.json(user);
});

app.post('/api/logout', (req,res) => {
  return res.json({});
});

// start server
app.listen(PORT, () => {
  console.log(`Server stated on port: ${PORT}`);
});


////psql -h localhost -p 5432 -d ng_rolodex -U admin