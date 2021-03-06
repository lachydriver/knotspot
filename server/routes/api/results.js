const express = require("express");
const router = express.Router();

const Result = require("../../results");

router.post("/saveresults", (req, res) => {
    user_id = req.body.user_id;
    results = req.body.results;
    firstbone = req.body.firstbone;

    const newResult = new Result({
        user_id: user_id,
        results: results,
        firstbone: firstbone
    });

    newResult.save().then(result => res.json(result)).catch(err => res.status(400));
});

router.post("/getresults", (req, res) => {
    user_id = req.body.user_id;

    results = {};

    Result.find({user_id: user_id}, function(err, data) {
        if(err){
            console.log(err);
            return;
        }

        if(data.length === 0){
            return res.status(404).json({ results: "No Results Found"})
        } else {
            res.json(data)
        }

    })
});

router.post("/deleteresult", (req, res) => {
    _id = req.body._id;

    Result.findByIdAndRemove(_id, function(err, data) {
        if(err){
            console.log("not found!")
            res.status(404).json({results: "No results found"});
        } else {
            console.log("found!")
            res.send(data);
        }
    })
})

module.exports = router;