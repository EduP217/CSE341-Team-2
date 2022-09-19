const router = require('express').Router();

router.get("/", (req, res) => {
    console.log("Health check");
    res.status(200).send("Health check");
});

module.exports = router;