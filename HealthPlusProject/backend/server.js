const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ FIXED PATH
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});
// Register
app.post("/register", (req, res) => {
    console.log("Data Received:", req.body);
    res.send("Registration Successful ✅");
});

// Login
app.post("/login", (req, res) => {
    console.log("Login Data:", req.body);
    res.send("Login Successful ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT} 🚀`);
});