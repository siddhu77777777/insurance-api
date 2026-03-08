// Policy Routes

const express = require("express");
const router = express.Router();

router.get("/policies",(req,res)=>{
    res.send("All policies");
});

router.post("/policies",(req,res)=>{
    res.send("Policy created");
});

module.exports = router;
