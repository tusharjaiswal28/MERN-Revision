const express = require("express");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middleware/auth");

const app = express();
const VALID_TOKEN = "mysecrettoken";

app.use(express.json());
app.use(cookieParser());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin123") {
        res.cookie("token", VALID_TOKEN, {
            httpOnly: true,
        });

        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.get("/dashboard", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to dashboard" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
