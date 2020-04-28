const path = require('path');

exports.page = function(req, res) {
  const file = path.join(__dirname, '../static/pandemiainua-theme/index.html');
  res.sendFile(file);
};
