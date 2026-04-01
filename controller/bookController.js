const Book = require ("../models/book");

exports.addBook = async (req, res) => {
    try {
        const newBook = await Book.create (req.body);
        res.status(201).json ({success: true, data: newBook});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
};

exports.getBooks = async(req, res) => {
    try{
        const books = await Book.find().populate("authors")
        .populate("borrowedBy").populate("issuedBy");

        res.status(200).json({success: true,count: books.length, data: books});
    } catch (error){
        res.status(500).json({success: false, message: error.message});
    }
};


exports.getBook = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id).populate("authors")
        .populate("borrowedBy").populate("issuedBy");

        if (!book) {return
        res.status(404).json ({message: "Not found"});
        }
        res.status(200).json ({success: true, data: book});
    } catch (error) {
        res.status(500).json ({success: false, message: error.message});
    }
};


exports.borrowBook = async(req,res) => {
    try {
        const {studentId, librarianId, returnDate} = req.body;
        const bookId = req.params.id;
        const book = await Book.findById (bookId)

        if (!book) {
            return res.status(404).json ({message : "Book Not found"});
        }

        if (book.status === "OUT") {
            return res.status(400).json({message: "Already Borrowed"});
        }
        book.status= "OUT";
        book.borrowedBy = studentId;
        book.issuedBy = librarianId;
        book.returnDate= returnDate;

        await book.save();
        return res.status(200).json({message: "Book borrowed.", data: book});

    } catch (error) {
        res.status(500).json({message: error.message});
}
};


exports.returnBook = async(req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) return 
        res.status (404).json ({message: "Book not found"});

        book.status = "IN";
        book.borrowedBy = null;
        book.issuedBy = null;
        book.returnDate = null;

        await book.save();
        res.status(200).json ({message: "Book returned"});
    } catch (error) {
        res.status(500).json ({message: error.message});
    }
};