const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        username: String,
        password: String,
        email: String
    },
    { timestamps: true}
)

module.exports = mongoose.model("users", DataSchema);