require("dotenv").config()
const server = require('./api/server.js');

const PORT = process.env.PORT || 3300;
server.use('*', (req, res) => {
    res.send("<h1>Welcome Kyle</h1>")
})
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});