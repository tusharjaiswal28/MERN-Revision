const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());


const JWT_SECRET = "mysceretkey";

const users = [];

app.get("/test", (req, res) => {
    res.json({ massage: "This is test route" });
})

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    const userExists = users.find(u => u.username == username);

    if (userExists)
        return res.status(400).json({ message: "User already exists" });

    users.push({ username, password });

    res.json({ message: "Signup successful" });
})

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username == username && u.password == password);

    if (!user)
        return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ username: user.username },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ message: "Login successfull", token });
});

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).json({ message: "Token missing1" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Token expired or invalid" });
    }
}

app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});

app.listen(3000, () => {
    console.log("Server running on PORT : 3000");
})