const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const course = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: String
});

const Course = mongoose.model("Course", course);

module.exports = Course;
