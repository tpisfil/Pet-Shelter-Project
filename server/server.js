const express = require("express");
const app = express();
const port = 8000; 
const cors = require("cors")

app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information 
app.use( cors() );

require("./config/config")
require("./routes/pet.routes")(app)

//this always goes at the END
app.listen( port, () => console.log(`Listening on port: ${port}`));