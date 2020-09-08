var customers = require("./customers");
var app = require("express")();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.send("<h1>Hello Node.js Simple API</h1>");
});

app.get("/customer", function (req, res) {
  res.json(customers.findAll());
});

app.get("/customer/:id", function (req, res) {
  var id = req.params.id;
  res.json(customers.findById(id));
});

app.post("/newcustomer", function (req, res) {
  var json = req.body;
  res.send("Add new " + json.name + " Completed!");
});

app.listen(port, function () {
  console.log("Starting node.js on port " + port);
});
