import axios from 'axios';

const OLA_API_URL = 'https://api.example.com/ola/price'; // Replace with the actual API URL
const OLA_API_KEY = 'YOUR_OLA_API_KEY';

export const fetchOlaPrice = async (params) => {
  try {
    const response = await axios.get(OLA_API_URL, {
      headers: {
        'Authorization': `Bearer ${OLA_API_KEY}`
      },
      params
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Ola price:', error);
    return null;
  }
};
