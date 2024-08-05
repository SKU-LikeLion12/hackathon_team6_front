import axios from 'axios';

export const getChatBotConversations = async (userId) => {
  try {
    const response = await axios.get(`/api/chatbot/conversations/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch chatbot conversations:', error);
    throw error;
  }
};
