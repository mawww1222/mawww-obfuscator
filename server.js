const express = require("express");
const path = require("path");
const app = express();

// Serve static files dari folder public
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check (opsional, untuk monitoring)
app.get("/health", (req, res) => {
    res.json({ ok: true, status: "alive", time: Date.now() });
});

// 404 fallback
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});

// PENTING: Export app untuk Vercel
module.exports = app;
