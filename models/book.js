const mongoose= require ("mongoose")

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    Isbn : {type: String, unique: true, required: true, trim: true},
    authors: [{type: mongoose.Schema.Types.ObjectId, 
        ref: "Author", required: true}],
    status : {type: String, enum : ["IN","OUT"],
        default: "IN"
    },
    borrowedBy: {type: mongoose.Schema.Types.ObjectId,
        ref: "Student",default: null
    },
    issuedBy: {type:mongoose.Schema.Types.ObjectId,
        ref:"Librarian", default: null
    },
    returnDate: {type: Date, default: null},
},
    {timestamps: true});
module.exports = mongoose.model("Book",bookSchema);