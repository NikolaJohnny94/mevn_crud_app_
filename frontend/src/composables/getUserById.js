import axios from 'axios'

export const getUserById = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/v1/users/${id}`)
  return res.data.data
}
