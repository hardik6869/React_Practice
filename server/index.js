const express = require("express");
const path = require("path");
const app = express();

// app.get('/',(req,res) => {
//     res.sendFile("Hello world !!!!");
// });

app.get("/api", (req, res) => {
    res.send({ name: "Hello World" });
    console.log("Data Fetch Successfully");
   });

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server started ${PORT}`));