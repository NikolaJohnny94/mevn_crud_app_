const express = require('express')
const router = express.Router()
const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController.js')

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)

module.exports = router
