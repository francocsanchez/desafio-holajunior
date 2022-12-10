const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
    {
        question: String,
        options: {
            a: String,
            b: String,
            c: String
        },
        correctAnswer: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Questions', questionSchema);