const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const datenbankName = __dirname + "/daten/contacts.db";

app.set("view engine", "ejs");
app.set("views", __dirname + "/view");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

const datenbank = new sqlite3.Database(datenbankName,
    function (error) {
        if (error) {
            return console.error(error.message);
        }
        console.log("Verbindung zu " + datenbankName + " hergestellt.");
    });

app.get("/", function (request, response) {
    let sqlStatement = "SELECT * FROM contacts"
    datenbank.all(sqlStatement, [], function (error, rows) {
        if (error) {
            return console.error(error.message);
        }
        response.render("liste", { daten: rows });
    });
});

app.get("/neu", function (request, response) {
    response.render("neu");
})

app.post('/neu', function (request, response) {

    let sqlStatement = "INSERT INTO contacts (firstname, lastname, street, houseNumber, postalCode, city) VALUES (?, ?, ?, ?, ?, ?)";

    let contact = [request.body.firstname, request.body.lastname, request.body.street, request.body.houseNumber, request.body.postalCode, request.body.city];

    datenbank.run(sqlStatement, contact, function (error) {
        if (error) {
            return console.error(error.message);
        }
        response.redirect("/");
    })
});

app.get("/bearbeiten/:id", function (request, response) {
    let id = request.params.id;
    let sqlStatement = "SELECT * FROM contacts WHERE id = ?"

    datenbank.get(sqlStatement, id, function (error, row) {
        if (error) {
            return console.error(error.message);
        }
        response.render("bearbeiten", { daten: row });
    });
})

app.post("/bearbeiten/:id", function (request, response) {
    let id = request.params.id;
    let sqlStatement = "UPDATE contacts SET firstname = ?, lastname = ?, street = ?, houseNumber = ?, postalCode = ?, city = ?  WHERE(id = ?)";
    let contact = [request.body.firstname, request.body.lastname, request.body.street, request.body.houseNumber, request.body.postalCode, request.body.city, id];
    datenbank.run(sqlStatement, contact, function (error) {
        if (error) {
            return console.error(error.message);
        }
        response.redirect("/");
    });
});

app.get("/loeschen/:id", function (request, response) {
    let id = request.params.id;
    let sqlStatement = "DELETE FROM contacts WHERE id = ?";

    datenbank.run(sqlStatement, id, function (error) {
        if (error) {
            return console.error(error.message);
        }
        console.log(`Eintrag mit ID ${id} wurde gelöscht`);
        response.redirect("/");
    });
});

const server = app.listen(8000, function () {
    console.log("Der Server läuft auf " + server.address().address
        + ":" + server.address().port);
});
