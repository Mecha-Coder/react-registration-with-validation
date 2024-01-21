import axios from "axios"

const api = axios.create({
  baseURL: 'https://api.example.com', 
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});


async function fetchData() {
  try {
    const response = await instance.get('/endpoint');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
