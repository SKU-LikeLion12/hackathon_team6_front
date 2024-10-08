import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export const getTopEmotions = async (situation) => {
  try {
    const response = await axios.get(`${API_URL}/diary/top-emotion`);
    return response.data.topEmotions;
  } catch (error) {
    console.error('Failed to fetch top emotions:', error);
    throw error;
  }
};
