const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const path = require("path");
const http = require("http");
const cors = require("cors");






//App setup
const app = express();



//middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser("secretcode"));



//App routes
app.get("/api", function (req, res) {
    res.send("server connected")
  }
  )



//production enviornment
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('./build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
  }
  
//Server Setup

const PORT = process.env.PORT || 8050;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server connect on ${PORT}`));