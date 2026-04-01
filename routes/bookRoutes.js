const express = require ("express");
const router = express.Router();

const { addBook, getBooks, getBook,borrowBook, returnBook} =
require("../controller/bookController");

router.post ('/', addBook);
router.get ('/',getBooks);

router.get('/:id', getBook);
router.post ('/:id/borrow', borrowBook);
router.post ('/:id/return', returnBook);

module.exports = router;