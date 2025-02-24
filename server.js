const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const currentTime = new Date().toISOString();
    res.send("Irena Saja - WEB322 " + currentTime);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
