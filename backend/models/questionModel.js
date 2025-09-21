// backend/models/questionModel.js

const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    question: { type: String, required: true },
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;