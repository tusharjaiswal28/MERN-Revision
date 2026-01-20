const VALID_TOKEN = "mysecrettoken";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (token === VALID_TOKEN) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
