"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Book Model Start
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    //book writer
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"],
        message: "Please Provide a Valid Category of The Book",
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true
    },
}, { timestamps: true });
// book Model End
//Export 
const Book = (0, mongoose_1.model)('Book', bookSchema);
exports.default = Book;
