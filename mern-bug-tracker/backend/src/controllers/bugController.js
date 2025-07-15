const Bug = require('../models/bug');
const validateBug = require('../utils/validateBug');

exports.createBug = async (req, res, next) => {
  try {
    const { error } = validateBug(req.body);
    if (error) {
      return res.status(400).json({ message: error });
    }
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
};

exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

exports.updateBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!bug) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.json(bug);
  } catch (err) {
    next(err);
  }
};

exports.deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findByIdAndDelete(id);
    if (!bug) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    next(err);
  }
}; 