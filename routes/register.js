const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
    return res.render("register", {layout: "guestLayout"});
});



router.post('/', async (req,res) => {
    try{
        const {username, fullname, email, phone, password, password2} = req.body;
        if(!username || !fullname || !email || !phone || !password || !password2){
            return res.render("register", {layout: "guestLayout", ...req.body,error_msg:"Please fill all fields"});
        }else{
            if(password !== password2){
                return res.render("register", {layout: "guestLayout", ...req.body,error_msg:"Both passwords are not thesame"});
            }
            if(password2.length < 6 ){
                return res.render("register", {layout: "guestLayout", ...req.body,error_msg:"Password length should be min of 6 chars"});
            }
            const user = await User.findOne({email});
            if(user){
                return res.render("register", {layout: "guestLayout", ...req.body,error_msg:"A User with that email already exists"});
            } else{
                const newUser = {
                    username,
                    fullname,
                    email,
                    phone,
                    password
                };
                const salt = await bcrypt.genSalt();
                const hash = await bcrypt.hash(password2, salt);
                newUser.password = hash;
                const _newUser = new User(newUser);
                await _newUser.save()
                return res.redirect("/login")
            }
        }
    }catch(err){
        console.log(err)
    }
})


module.exports = router;