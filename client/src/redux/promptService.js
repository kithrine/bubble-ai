import axios from "axios";

const promptService = {

  getAllPrompts: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/prompt`)
  },
  addPrompt: async (promptForm) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/prompt`,
      promptForm,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  deletePrompt: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/prompt/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },

};

export default promptService;