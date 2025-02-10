const express = require("express");
const app = express();
const serverless = require("serverless-http");

app.get("/", (req, res) => {
    let userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    res.json({ message: "Your IPv4 address is", ip: userIp });
});

// اکسپورت برای Vercel
module.exports = app;
module.exports.handler = serverless(app);