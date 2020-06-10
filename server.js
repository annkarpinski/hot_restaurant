// import dependencies
var express = require("express");

// create am express server
var app = express();

// define port where server will listen in prod or locally
var PORT = process.env.PORT || 8080;

// add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// application data using stubbing
var tables = [
  {
    customerName: "Table test",
    customerEmail: "table@test.com",
    customerID: "0123456789",
    phoneNumber: "555-555-5555",
  },
];
var waitlist = [
  {
    customerName: "Table test",
    customerEmail: "table@test.com",
    customerID: "0123456789",
    phoneNumber: "555-555-5555",
  },
];

// html routes
app.get("/", function (req, res) {
  res.send("It's working!");
});

// api routes

// start the server
app.listen(PORT, function () {
  console.log("server is listening on http://localhost:" + PORT);
});
