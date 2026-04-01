const express = require ("express");
const dotenv = require ("dotenv");
const connectDB = require("./config/database");
const authorRoutes = require ("./routes/authorRoutes");
const bookRoutes = require ("./routes/bookRoutes");
const studentRoutes = require ("./routes/studentRoutes");
const librarianRoutes = require ("./routes/librarianRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/authors", authorRoutes);
app.use ("/api/books", bookRoutes);
app.use ("/api/students", studentRoutes);
app.use("/api/librarians", librarianRoutes);


app.get("/", (req,res) => {
    res.send("The Library API is running");
});

const PORT = 4000;
app.listen (PORT, () => {
    console.log(`server is running on port ${PORT}`);
});