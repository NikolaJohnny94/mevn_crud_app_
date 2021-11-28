import axios from 'axios'

export const deleteUser = async (id) => {
  const res = await axios.delete(`http://localhost:3000/api/v1/users/${id}`)
  return res.data
}
