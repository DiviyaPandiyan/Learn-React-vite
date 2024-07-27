import axios from 'axios';

const UBER_API_URL = 'https://api.example.com/uber/price'; // Replace with the actual API URL
const UBER_API_KEY = 'YOUR_UBER_API_KEY';

export const fetchUberPrice = async (params) => {
  try {
    const response = await axios.get(UBER_API_URL, {
      headers: {
        'Authorization': `Token ${UBER_API_KEY}`
      },
      params
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Uber price:', error);
    return null;
  }
};
