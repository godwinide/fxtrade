const router = require("express").Router();
const {ensureAuthenticated} = require("../config/auth")


router.get("/", ensureAuthenticated, (req, res) => {
    return res.render("dashboard", {user:req.user});
});

module.exports = router;