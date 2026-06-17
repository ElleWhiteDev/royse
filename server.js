const express = require('express');
const path = require('path');
const app = express();

// Redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, 'https://www.royselocks.com' + req.url);
  }
  if (req.headers.host === 'royselocks.com') {
    return res.redirect(301, 'https://www.royselocks.com' + req.url);
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
