const { Users } = require("../../models");
const { compareSync } = require("bcrypt");
const { createJWT } = require("../../middlewares/jwt");

const service = async (req, res) => {
  try {
    const { email, password } = req.body;
    //   find by email
    const user = await Users.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).json({
        msg: "email & password not match",
      });
    }
    //   compare password
    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        msg: "email & password not match",
      });
    }
    //   create token
    const token = createJWT(user);
    // success
    return res.status(200).json({
      msg: "Login success",
      data: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

module.exports = { service };
