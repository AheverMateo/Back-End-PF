// http://localhost:3001/Nonflix/login
const bcrypt = require("bcryptjs");
const { User } = require("../db");
const { JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");
const { sendEmailNotification } = require("../utils/sendEmailNotification");
const { messageHtml } = require("../utils/htmlEmailNotification");

const postUser = async (req, res) => {
  try {
    const { email, password, name, provider } = req.body;

    const hashedPassword = await bcrypt.hash(password, 8);

    if (!email || !hashedPassword || !name) {
      throw new Error("Something is missing");
    }

    const userAlreadyExists = await User.findOne({ where: { email: email } });

    if (userAlreadyExists) {
      throw new Error("Existing user");
    } else {
      const user = await User.create({
        email,
        password: hashedPassword,
        name,
        provider: provider ? provider : "local",
      });

      const subject = "Nonflix Registration";
      await sendEmailNotification(email, subject, messageHtml(name));

      const { id } = user.dataValues;
      const token = jwt.sign({ id }, JWT_SECRET);

      if (token) {
        res
          .status(200)
          .json({ id: user.id, name: user.name, email: user.email, token });
      }
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { postUser };
