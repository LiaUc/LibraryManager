const express = require("express");
const router = express.Router();
const {createLibrarian, getLibrarians} = require ('../controller/librarianController');


router.post ('/', createLibrarian);
router.get ('/', getLibrarians);

module.exports = router;