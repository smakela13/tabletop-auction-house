const express = require('express');
const path = require('path');
const db = require('./config/connection');
const compression = require('compression');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`We'll leave as soon as you're ready, Docking Bay ${PORT}!`);
  });
});
