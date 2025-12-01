import axios from "axios";

const conversationService = {
  addConversation: async (conversationCreateForm) => {
    // console.log("addConversation REDUX SERVICE conversationCreateForm", conversationCreateForm)
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/conversation`,
      conversationCreateForm,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  getAllConversations: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/conversation`)
  },
  getConvoInfo: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/conversation/info`)
  },
  getOneConvo: async (id) => {
    // console.log("convo service id getOne id", id)
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/conversation/id/${id}`)
  },
  updateConversation: async (id, editConversation) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/conversation/${id}`,
      editConversation,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  deleteConversation: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/conversation/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  addChat: async (id, conversationChatForm) => {
    console.log("addChat Redux Service id, conversationChatForm", id, conversationChatForm)
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/conversation/${id}/chat`,
      conversationChatForm
    )
  },
};

export default conversationService;