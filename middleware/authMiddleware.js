const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Extract the token

  if (!token) {
    return res.status(403).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded token (user info) to the request
    next(); // Continue to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
