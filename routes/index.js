const primeno = require("./primeno");

const constructorMethod = app => {
    app.use("/", primeno)
    app.use("/primeno", primeno);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
    app.get("/", (req, res) => {
        res.render("layouts/main");
    });
    // app.use("*", (req, res) => {
    //     res.sendStatus(404);
    // });

};

module.exports = constructorMethod;