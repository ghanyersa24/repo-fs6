const express = require("express");
const app = express();
const port = 3600;

app.get("/", (req, res) => {
  return res.send("Hello Dunia Ghany!");
});

app.get("/ghany", (req, res) => {
    
  return res.send("Hallo Ghany!");
});

// dynamic route query
app.get("/ghany-query", (req, res) => {
  return res.send("dynamic routing query " + req.query.name);
});

//   dynamic route params
app.get("/ghany-params/:name", (req, res) => {
  return res.send("dynamic routing params " + req.params.name);
});

app.get("/json", (req, res) => {
  return res.json({ name: "Ghany Abdillah Ersa", role: "Tutor" });
});

app.get("/status-code", (req, res) => {
  return res.status(404).json({ status: "failed", message: "data tidak ditemukan" });
});

app.post("/ghany", (req, res) => {
  return res.send("POST GHANY");
});

app.put("/ghany", (req, res) => {
  return res.send("PUT GHANY");
});

app.delete("/ghany", (req, res) => {
  return res.send("DELETE GHANY");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
