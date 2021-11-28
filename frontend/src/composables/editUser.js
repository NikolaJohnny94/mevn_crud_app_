import axios from 'axios'

export const editUser = async (
  id,
  firstname,
  lastname,
  email,
  country,
  city
) => {
  const res = await axios.put(`http://localhost:3000/api/v1/users/${id}`, {
    firstname,
    lastname,
    email,
    country,
    city,
  })
  return res.data
}
