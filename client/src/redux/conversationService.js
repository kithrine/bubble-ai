import axios from "axios";

const conversationService = {

  addConversation: async (conversationCreateForm) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/conversation`,
      conversationCreateForm,
      { 
        headers: { "Content-Type": "application/json" },
        // responseType: "stream" 
      }
    );
  },
  getAllConversations: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/conversation`)
  },
  deleteConversation: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/conversation/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },

};

export default conversationService;