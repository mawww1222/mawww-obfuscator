//========================================================--
// MAWWW OBFUSCATOR - Static Server for Railway
//========================================================--
const express = require("express");
const path = require("path");

const app = express();

// Serve static files dari folder public
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check (buat Railway ping)
app.get("/health", (req, res) => {
    res.json({ ok: true, status: "alive", time: Date.now() });
});

// 404 fallback
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Mawww Obfuscator running on port ${PORT}`);
});
