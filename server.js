const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// STATIC FILES
app.use(express.static(path.join(__dirname, "frontend")));

// HOME ROUTE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// ROUTES
app.post("/register", (req, res) => {
    res.send("Registration Successful ✅");
});

app.post("/login", (req, res) => {
    res.send("Login Successful ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running 🚀");
});
