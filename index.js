const express = require("express");
const app = express();
const port = 3000;
app.get("/health-checkup", function (req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "Jayashree" || password != "pass") {
        res.status(403).json({
            msg: "user doesn't exist",
        });
        return;
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }
    res.send("Your heart is healthy");
});
app.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});