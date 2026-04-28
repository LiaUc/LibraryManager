const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  studentId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
