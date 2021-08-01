const { ensureAuthenticated } = require("../config/auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
    return res.render("withdraw");
});


router.post("/", ensureAuthenticated, (req,res) => {
    return res.render("withdraw", {error_msg:"Insufficient funds"});
})

module.exports = router;