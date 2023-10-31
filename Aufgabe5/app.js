const http = require("http");
const fs = require("fs");

const adresse = "127.0.0.1";
const port = 8080;

let ausgabe;

const demotext = "Ich bin ein Text, nicht lang, nicht kurz.";

fs.writeFile("demo.txt", demotext, (err) => {
    if (err)
        console.log(err);
    else
        console.log("Die Datei wurde erstellt");
});

fs.readFile("demo.txt", "utf-8", (err, data) => {
    if (err)
        ausgabe = err.message;
    else
        ausgabe = data;
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset = utf8");

    const modifiedContent = ausgabe
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const body = `<!DOCTYPE html>
        <html lang="de">
            <head>
                <meta charset="utf-8">
                <title>Ausgabe aus einer Datei</title>
            </head>
            <body>
                <h1>${modifiedContent}</h1>
            </body>
        </html>`;
    res.end(body);
});

server.listen(port, adresse, () => {
    console.log("Der Server läuft auf " + adresse + ":" + port);
});