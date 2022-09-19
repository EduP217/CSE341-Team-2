const router = require('express').Router();

router.get("/", () => {
    console.log("Health check")
});

module.exports = router;