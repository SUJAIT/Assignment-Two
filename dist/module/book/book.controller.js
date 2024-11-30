"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_services_1 = require("./book.services");
//createBook
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const data = yield book_services_1.BookServices.createBook(body);
        res.send({
            message: "Book created successfully",
            success: true,
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Something Wrong Please Check Your Data",
            error
        });
    }
});
//Create Book End 
//GetBook Start
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.BookServices.getBook();
        res.send({
            message: 'Books retrieved successfully',
            status: true,
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
//GetBook End
//Specific Book start
const specificBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const productId = req.params.productId;
        const result = yield book_services_1.BookServices.specificBook(productId);
        res.send({
            message: 'Book retrieved successfully',
            status: true,
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong ☠️',
            error,
        });
    }
});
//Specific Book end
//Update Book Start
const UpdateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const body = req.body;
        const result = yield book_services_1.BookServices.UpdateBook(productId, body);
        res.send({
            message: "Book updated successfully",
            success: true,
            result
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Something went Wrong",
            error,
        });
    }
});
//Update Book End
//DeleteBook Start
const DeleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BookId = req.params.productId;
        yield book_services_1.BookServices.DeleteBook(BookId);
        res.send({
            message: 'Book deleted successfully',
            status: true,
            data: {},
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
//DeleteBook End
//
exports.BookController = {
    createBook,
    getBook,
    specificBook,
    UpdateBook,
    DeleteBook
};
