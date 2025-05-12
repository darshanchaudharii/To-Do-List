const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // serves HTML, CSS, JS, and images

// Sample route (you can edit or add more)
app.post("/register", (req, res) => {
  const { name, email } = req.body;
  console.log(`User registered: ${name}, ${email}`);
  res.send("Registration successful!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
