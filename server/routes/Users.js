const express = require("express");
const router = express.Router();
//here Posts down below is a model or table that we will deal later on
const { Posts } = require("../models");
const bcrypt = require("bcrypt");
const { Users } = require("../models");


router.post("/", async (req, res) => {
    const { userName, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            userName: userName,
            password: hash,
        });
        res.json("hashing successful");
    });
});

router.post("/login", async (req, res) => {
    const { userName, password } = req.body;
    const user = await Users.findOne({ where: { userName: userName } });

    if (!user) res.json({ error: "Username don't exist!" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Incorrect password!" })

        res.json("Successful login!");
    });

});

module.exports = router;