# note-taker

## Summary 
This app is a practice in MySQL, Node JS, Express JS. The application allows you to create, edit, and remove notes from the application. All data is being stored using MySql.

## Site Picture
![Site](/assets/notes.mp4)



## Technologies Used
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- MYSQL - MySQL is an open-source relational database management system.
- Node JS - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.


## Code Snippet
```javascript
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

```
- The code snippit above shows the routes taken to load pages and edit database information. 


## Author Links
[LinkedIn](https://www.linkedin.com/in/ken-bains)
[GitHub](https://github.com/ken-Bains)

