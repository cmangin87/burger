var connection = require("../config/connection");

module.exports = function(app) {
  // Get all burgers
  app.get("/api/all", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      res.json(result);
    });

    // Add a burger
    app.post("/api/new", function(req, res) {
      connection.query("INSERT INTO burgers SET ?", req.body, function(
        err,
        result
      ) {
        if (err) throw err;
        res.json(result);
      });
    });
  });
};

// Update a burger
app.post("/api/new", function(req, res) {
  connection.query("INSERT INTO burgers SET ?", req.body, function(
    err,
    result
  ) {
    if (err) throw err;
    res.json(result);
  });
});
