const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MuscleScore = new Schema({
    muscle: String,
    score: Number
})

const ResultSchema = new Schema(
    {
        user_id: String,
        results: Array,
        firstbone: String
    },
    { timestamps: true}
);

module.exports = mongoose.model("results", ResultSchema)