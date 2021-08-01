module.exports = app => {
    // GUEST ROUTES
    app.use("/", require('./routes/index'));
    app.use("/products", require('./routes/products'));
    app.use("/about", require('./routes/about'));
    // AUTH ROUTES
    app.use("/login", require("./routes/login"));
    app.use("/register", require("./routes/register"));
    app.use("/dashboard", require("./routes/dashboard"));
    app.use("/deposit", require("./routes/deposit"));
    app.use("/withdraw", require("./routes/withdraw"));
    app.use("/deposit-history", require("./routes/depositHistory"));
    // 404
    app.use("*", require("./routes/notfound"));
}