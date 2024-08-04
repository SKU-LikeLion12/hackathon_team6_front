// src/api/situationApi.js
import axios from 'axios';

const API_URL = 'http://team6back.sku-sku.com';

export const getEmotionSituation = async (situationId) => {
  try {
    const response = await axios.get(`${API_URL}/situation/${situationId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching emotion situation for ID ${situationId}:`,
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
