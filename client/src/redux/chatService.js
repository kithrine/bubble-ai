import axios from "axios";

const chatService = {

  getAllChats: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/chat`)
  },
  addChat: async (chatForm) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/chat`,
      chatForm,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  deleteChat: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/chat/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },

};

export default chatService;