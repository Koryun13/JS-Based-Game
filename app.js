
var express = require("express");
var app = express();


app.set("port", (process.env.PORT || 5000) );

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public");
});

app.listen(app.get("port"), function(){
   console.log("Example is running on port 3000");
});

