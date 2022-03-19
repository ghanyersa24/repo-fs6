const { Users } = require("../../models");

// me user
const service = async (req, res) => {
  try {
    const user = await Users.findOne({
      attributes: {
        exclude: ["password"],
      },
      where: { id: req.auth.id },
    });
    if (!user)
      return res.status(404).json({
        msg: "User not found",
      });
    return res.json({
      msg: "User found",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
};

module.exports = { service };
