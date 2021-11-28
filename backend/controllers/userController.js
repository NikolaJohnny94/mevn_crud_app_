const userModel = require('../models/User.js')

//Get All Users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userModel.find()
    if (users) {
      res.status(200).json({
        success: true,
        data:
          users.length != 0
            ? users
            : { message: 'There are no users found in the DB!' },
      })
    }
  } catch (error) {
    next(error)
  }
}

// Get User By ID
exports.getUserById = async (req, res, next) => {
  try {
    const userID = await userModel.findById(req.params.id)
    if (userID) {
      res.status(200).json({
        success: true,
        data: userID,
      })
    }
  } catch (error) {
    next(error)
  }
}

//Create New User
exports.createUser = async (req, res, next) => {
  try {
    const newUser = await userModel.create(req.body)
    if (newUser) {
      res.status(201).json({
        success: true,
        message: 'User successfully created',
        data: newUser,
      })
    }
  } catch (error) {
    next(error)
  }
}

//Update Existing User
exports.updateUser = async (req, res, next) => {
  try {
    const userID = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (userID) {
      res.status(200).json({
        success: true,
        message: 'User successfully updated',
        data: userID,
      })
    }
  } catch (error) {
    next(error)
  }
}

//Delete Existing User
exports.deleteUser = async (req, res, next) => {
  try {
    const userID = await userModel.findById(req.params.id)
    if (userID) {
      userID.remove()
      res.status(200).json({
        success: true,
        message: `User successfully deleted`,
        data: {},
      })
    }
  } catch (error) {
    next(errorHandler)
  }
}
