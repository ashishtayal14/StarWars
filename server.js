var express = require('express')
var path = require('path')
const app = express();
app.use(express.static('./build'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

let port = process.env.PORT || 1300;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
