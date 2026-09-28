//========================================================--
// MAWWW OBFUSCATOR - Vercel Compatible Server
//========================================================--
const express = require("express");
const path = require("path");

const app = express();

//========================================================--
// STATIC FILES
//========================================================--
app.use(express.static(path.join(__dirname, "public")));

//========================================================--
// ROUTES
//========================================================--
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/health", (req, res) => {
    res.json({ ok: true, status: "alive", time: Date.now() });
});

//========================================================--
// 404 FALLBACK
//========================================================--
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});

//========================================================--
// EXPORT untuk Vercel (JANGAN pakai app.listen!)
//========================================================--
module.exports = app;
