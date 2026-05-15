# Bubble AI

Bubble AI is a full-stack conversational AI app built with a React/Tailwind front end and an Express/MongoDB back end. It supports creating conversations, saving prompts and responses, selecting AI models, and storing chat history in MongoDB.

## Key Features

- Create and manage conversations with custom titles and model instructions
- Submit chat prompts and receive AI responses
- Choose from multiple AI models via dropdown
- Persist conversation metadata and chat history in MongoDB
- View conversation details and chat history
- Uses Ollama for AI generation via a local or remote API endpoint
- Modern UI with React 19, Vite, Redux Toolkit, Tailwind CSS, and DaisyUI

## Tech Stack

- Frontend
  - React 19
  - Vite
  - Redux Toolkit
  - Tailwind CSS
  - DaisyUI
  - Axios
  - React Router
  - Framer Motion

- Backend
  - Node.js
  - Express 5
  - Mongoose
  - Axios
  - dotenv
  - Ollama client library

- Database
  - MongoDB

## Project Structure

- `client/` - React application
- `server/` - Express API server
- `server/chat/` - standalone chat endpoints and schema
- `server/conversations/` - conversation CRUD endpoints and schema

## Data Model

### Conversation

- `title` - string
- `modelInstructions` - string
- `dateCreated` - date
- `favorited` - boolean
- `archived` - boolean
- `chats` - array of chat objects

### Chat

- `prompt` - string
- `model` - string
- `date` - date
- `answer` - string
- `favorited` - boolean
- `archived` - boolean

## Backend API Endpoints

### Conversation routes

- `POST /conversation` - create a new conversation
- `GET /conversation` - get all conversations
- `GET /conversation/info` - get all conversations without chat history
- `GET /conversation/id/:id` - get a single conversation by ID
- `PUT /conversation/:id` - update an existing conversation
- `PUT /conversation/:id/chat` - add a new chat to a conversation

### Chat routes

- `GET /chat` - get all individual chat records
- `POST /chat` - create a new chat record
- `DELETE /chat/:id` - delete a chat record

## Environment Variables

### Server

Create `server/.env` with:

```env
EXPRESS_PORT=8022
MONGODB_URL=mongodb://127.0.0.1:27017/bubble-ai
OLLAMA_API_URL=http://localhost:11434/api/generate
```

- `EXPRESS_PORT` - port for the Express API
- `MONGODB_URL` - MongoDB connection URI
- `OLLAMA_API_URL` - Ollama inference endpoint

### Client

Create `client/.env` with:

```env
VITE_NODE_SERVER_URL=http://localhost:8022
```

- `VITE_NODE_SERVER_URL` - URL of the Express backend server

## Setup Guide

### Prerequisites

- Node.js installed
- npm installed
- MongoDB running locally or available remotely
- Ollama API available at the configured `OLLAMA_API_URL`

### Install Dependencies

From the root of the repository:

```bash
cd server
npm install

cd ../client
npm install
```

### Start the Backend

From the `server` folder:

```bash
npm run dev
```

If you do not use the `.env` file, the backend falls back to port `8020`.

### Start the Frontend

From the `client` folder:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, typically `http://localhost:5173`.

## Usage

1. Create a new conversation with a title and model instructions.
2. Open the conversation detail page.
3. Enter a prompt in the chat input.
4. Select an AI model from the dropdown.
5. Submit the prompt and view the generated response.
6. Chat history is saved as part of the conversation.

## Notes

- The project currently uses a local Ollama API integration for response generation.
- Conversation history is stored in MongoDB and can be retrieved with the API.
- There is a “History” page and a conversation detail flow for browsing chats.

## Recommended Improvements

- Add pagination or search for conversation history
- Add authentication and user accounts
- Improve error handling for failed AI requests
- Add a 404 page for unknown routes
- Support streaming AI responses in the client

## License

No license specified.
