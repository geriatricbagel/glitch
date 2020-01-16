// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});





app.get("/api/timestamp/:date?", (req, res) => {
  let date;
  if (!(req.params.date)) {
    date = new Date()  
  } else if (isNaN(req.params.date)) {
    date = new Date(req.params.date)
  } else {
    date = new Date(req.params.date*1000)
  }
  
  if (date.toString() == 'Invalid Date') {
    res.json({
      error: "Invalid Date"
    })
  } else {
    res.json({
      unix: date.valueOf(),
      utc: date.toUTCString()
    })
  }
})

