const User = require("../models/User");

exports.create = async (req, res) => {
  if (!req.body.fname && !req.body.lname && !req.body.email && !req.body.number) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    number: req.body.number
  });
  try {
    const userToSave = await user.save();
    res.status(200).json(userToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;
  try {
    const user = await User.find()
      .sort({ _id: 1 })
      .limit(limit)
      .skip(skipIndex)
      .exec();
    res.json(user);
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
