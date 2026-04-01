const mongoose= require("mongoose");

const librarianSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    staffId: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Librarian", librarianSchema);