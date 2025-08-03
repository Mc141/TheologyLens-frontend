# TheologyLens Frontend

This is the React frontend application for **TheologyLens** — a tool for exploring scripture with meaning, not just words.

---

## Features

* Search scripture by question, theme, or phrase
* Display results fetched from the TheologyLens API backend
* Responsive design with clean UI styling
* Interactive scripture exploration interface
* Real-time search functionality

---

## Getting Started

### Prerequisites

* **Node.js** (v16 or newer)
* **npm** or **yarn**
* Running instance of the [TheologyLens Backend](https://github.com/Mc141/TheologyLens-backend)

---

### Installation

```bash
# Clone the repository
git clone https://github.com/Mc141/TheologyLens-frontend.git
cd TheologyLens-frontend

# Install dependencies
npm install
# or
yarn install
```

---

### Configure API Endpoint

Create a `.env` file in the root directory and set the backend API URL:

```
VITE_API_URL=http://localhost:8000
```

If you're using a deployed backend (e.g. Fly.io, Railway), replace with the live URL.

---

### Run the App

```bash
npm run dev
# or
yarn dev
```

This will launch the app at [http://localhost:5173](http://localhost:5173) by default.

---

## Related Repositories

### Backend Repository

The backend service that powers semantic search and verse matching:
[**TheologyLens Backend**](https://github.com/Mc141/TheologyLens-backend)

> FastAPI-based API providing semantic Bible search.

---

### Embedding & Development Scripts

Scripts used to build the FAISS vector index and generate clusters:
[**TheologyLens Development**](https://github.com/Mc141/TheologyLens)

> Includes SentenceTransformer setup, clustering, and embedding logic.

---

## Technology Stack

* **Vite** – Build tool for fast React development
* **React** – Frontend framework
* **JavaScript (ES6+)** – Main language
* **CSS3** – Styling
* **Fetch API** – API interaction layer

