const Librarian = require ("../models/librarian");

exports.createLibrarian = async (req, res) => {
    try {
        const librarian = await Librarian.create(req.body);
        res.status(201).json({success: true, data: librarian});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
};

exports.getLibrarians = async (req, res) => {
    try{
        const librarians = await Librarian.find();
        res.status(200).json({success: true, data: librarians});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};