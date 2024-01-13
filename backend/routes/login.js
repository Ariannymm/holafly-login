const express = require("express");
const router = express.Router();
const { jsonResponse } = require("../lib/jsonResponse");

router.post("/", (req, res) => {
    const {email, password} = req.body;

    if(!!!email || !!!password) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Fields are required",
            })
        );
    }

    res.status(200).json(jsonResponse(200, { message: "User logged in successfully" }));
    
    res.send("login");
});

module.exports = router;