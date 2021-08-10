const { ensureAuthenticated } = require("../config/auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
    return res.render("withdraw", {req});
});

router.post("/", ensureAuthenticated, async (req,res) => {
    const {id} = req.body;
    if(!id){
        return res.redirect("/");    
    }
    const user = await User.findById(id);
    if(!user){
        return res.redirect("/");
    }
    if(user.balance == 0){
        return res.render("withdraw", {error_msg:"Insufficient funds", id, req});
    }
    else{
        return res.render("withdraw", {error_msg:"You are still owing $"+user.owing, id, req});
    }
})

module.exports = router;