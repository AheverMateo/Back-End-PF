// http://localhost:3001/Nonflix/login

const { User } = require("../db");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    let validatePass, token;

    if (user) {
      validatePass = await bcrypt.compare(password, user.dataValues.password);
      const { id } = user.dataValues;

      token = jwt.sign({ id }, JWT_SECRET);
      if(user.dataValues.provider === 'Google'){
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            token,
          })
      }else{
        validatePass
      ? res.status(200).json({
          id: user.id,
          name: user.name,
          email: user.email,
          token,
        })
      : res.status(401).json("Incorrect password");
      }
    }else{
        throw new Error("The user is not registered");
    }

  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: error.message });
  }
};

module.exports = { loginUser };
