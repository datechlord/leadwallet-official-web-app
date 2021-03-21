const express = require("express")
const enforce = require("express-sslify");
const app = express();
const path = require("path");
const port = process.env.PORT || 4000;

// const targetBaseUrl = process.env.TARGET || "https://www.leadwallet.io";

app.use(express.static(
 path.join(__dirname, "build")
));

app.use(enforce.HTTPS({
 trustProtoHeader: true,
 trustXForwardedHostHeader: true
}));

// app.get("/", (req, res) => {
//  res.redirect(targetBaseUrl + "/home");
// });

app.get("/*", (req, res) => {
 res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(port, () => {
 console.log(`App listening on port ${port}`);
});