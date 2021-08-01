const router = require("express").Router();


router.get("/", (req, res) => {
    return res.render("about", {layout: "guestLayout"});
});

module.exports = router;