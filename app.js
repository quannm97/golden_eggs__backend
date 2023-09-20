const express = require("express");
const app = express();
const cors = require('cors')
const blogRoute = require("./routes/blog");

const PORT = 8000;
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.json());
app.use(cors())
app.use(express.static('/public/images'));
app.use("/api/v1/blog", blogRoute);
app.use((req, res, next) => {
    next();
});

app.listen(PORT, function () {});
