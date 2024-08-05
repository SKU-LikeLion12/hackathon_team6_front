import React, { useState, useEffect } from 'react';
import { getChatBotConversations } from '../api/chatBotApi';

export default function ChatBot() {
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState(null);
  const userId = 1234; // 필요한 사용자 ID로 설정

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const data = await getChatBotConversations(userId);
        setConversations(data);
      } catch (error) {
        setError('실패..');
        console.error('Failed to fetch chatbot conversations:', error);
      }
    };

    fetchConversations();
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!conversations.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>ChatBot Conversations</h1>
        {conversations.map((conversation, index) => (
          <div key={index}>
            <p>
              <strong>Date:</strong>{' '}
              {new Date(conversation.startTime).toLocaleString()}
            </p>
            <p>
              <strong>Message:</strong> {conversation.message}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
