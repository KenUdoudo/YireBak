const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const filePath = "./itemsData.json";

// API to save data to JSON file
app.post("/save", (req, res) => {
  const newData = req.body;
  fs.readFile(filePath, "utf8", (err, data) => {
    const jsonData = data ? JSON.parse(data) : [];
    jsonData.push(newData);
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving data.");
      res.send("Data saved successfully.");
    });
  });
});

// API to fetch data
app.get("/data", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading file.");
    res.json(JSON.parse(data || "[]"));
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));