const router = require("express").Router();


router.get("/", (req, res) => {
    return res.render("products", {layout: "guestLayout"});
});

module.exports = router;