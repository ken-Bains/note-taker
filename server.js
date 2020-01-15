const fs = require("fs");
const express = require("express");
const path = require("path");



var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"));
// app.use('/public', express.static(path.join(__dirname, "./public/")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.delete("/api/notes/:id", function (req, res) {
    readFile(req.params.id, "delete")
    res.json(req.params.id);
})
app.post("/api/notes", function (req, res) {
    readFile(req.body);
    res.json(req.body);
})
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function (err, data) {
        res.json(JSON.parse(data));
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, function () {
    console.log("app is running")
})

function readFile(reqBody, deleteFlag) {
    fs.readFile("./db/db.json", "utf8", function (err, data) {
        let dataArr = JSON.parse(data);
        if(deleteFlag === "delete") {
            dataArr.forEach((element, index) => {
                if(element.id == reqBody){
                    dataArr.splice(index, 1);
                }
            })
        } else{
            dataArr.push(reqBody);
            dataArr.forEach((element, index) => {
                element["id"] = index;
            });
        }
        writeToDatabase(dataArr);
    });
}

function writeToDatabase(arr) {

    fs.writeFile("./db/db.json", JSON.stringify(arr), function (err, data) {
        if (err) throw err;
    })

}