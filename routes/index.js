const router = require("express").Router();

router.get("/", async (req,res) => {
    const context = {title:"Welcome", layout:"guestLayout"}
    return res.render("welcome", context);
})

module.exports = router;