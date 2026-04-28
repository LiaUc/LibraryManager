const User = require("../../models/usermodel");
const Student = require("../../models/student");
const bcrypt = require("bcrypt");

const signUpController = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword });

    const count = await Student.countDocuments();

    const studentIdGen = `STD-${String(count + 1).padStart(4, "0")}`;

    const newStudent = await Student.create({
      name,
      email,
      studentId: studentIdGen,
    });

    res.status(201).json({
      ok: true,
      message: `User with role: ${user.role}, created succesfully`,
      data: newStudent,
    });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, error: { message: "cannot signup at the moment" } });

    console.log(err.message);
  }
};

module.exports = signUpController;
