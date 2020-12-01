const fs = require('fs');
const path = require('path');

module.exports = app => {
app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            var notes = JSON.parse(data);
            notes.push(newNote);
            updateDb(notes);
            return console.log("Added new note: " + newNote.title);
        });
        function updateDb(notes) {
        fs.writeFile("./Develop/db/db.json", JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
            return true;
        });
        }
    });

app.get("/api/notes", function (req, res) {
        fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            var notes = JSON.parse(data);
            res.json(notes);
        });
    });

app.get("/api/notes/:id", function (req, res) {
        fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            var notes = JSON.parse(data);
            res.json(notes);
        });
    });

app.delete("/api/notes/:id", function (req, res) {
    fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
        res.json(notes);
    });
            notes.splice(data);
            updateDb(notes);
            console.log("Deleted note with id " + req.params.id);
        });

// routes
app.get('/notes', function (req, res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

};