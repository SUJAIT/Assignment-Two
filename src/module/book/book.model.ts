import { model, Schema } from "mongoose";
import { IBook} from "./book.interface";

//Book Model Start
const bookSchema = new Schema<IBook>({
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
},
 { timestamps: true}
)

// book Model End

//Export 
const Book = model<IBook>('Book', bookSchema)
export default Book