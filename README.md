# Library Management API

## How to Setup and Run
1. Open the terminal in this folder.
2. Type `npm install` to install the dependencies.
3. Create a `.env` file and add your `MONGO_URI` and `PORT`.
4. Type `node server.js` to start the server.

## API Documentation
These are the routes available in this API:

### Books
- **POST** `/api/books` - Add a new book
- **GET** `/api/books` - Get all books
- **GET** `/api/books/:id` - Get a single book by ID

### Students
- **POST** `/api/students` - Register a student
- **GET** `/api/students` - List all students

### Librarians
- **POST** `/api/librarians` - Add a librarian

