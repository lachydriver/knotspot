const express = require("express");
const router = express.Router();

const Result = require("../../results");

router.post("/saveresults", (req, res) => {
    user_id = req.body.user_id;
    results = req.body.results;

    const newResult = new Result({
        user_id: user_id,
        results: results
    });

    newResult.save().then(result => res.json(result)).catch(err => console.log(err));
});

module.exports = router;