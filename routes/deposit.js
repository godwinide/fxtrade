const { ensureAuthenticated } = require("../config/auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
    return res.render("deposit");
});

module.exports = router;