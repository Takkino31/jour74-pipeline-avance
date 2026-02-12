const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from multi-stage pipeline!', timestamp: new Date() });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
