import axios from 'axios'

export const createUser = async (firstname, lastname, email, country, city) => {
  const res = await axios
    .post('http://localhost:3000/api/v1/users', {
      firstname,
      lastname,
      email,
      country,
      city,
    })
    .catch((error) => console.log(error.message))

  return res.data
}
