# Plantsy 🌱

Plantsy is a React-based admin dashboard for a plant store. It allows store admins to view, add, search, and manage plant inventory in real time.

## Demo

![Demo GIF](./demo.gif)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Tech Stack](#tech-stack)

## About

Plantsy connects a React frontend to a JSON backend via fetch requests. State is managed with React hooks (`useState`, `useEffect`) to keep the UI in sync with the backend.

## Features

- View all plants on page load (fetched from backend)
- Add a new plant via a form (persisted to backend via POST)
- Mark a plant as "Out of Stock" / "In Stock" (client-side toggle)
- Search/filter plants by name in real time

## Setup

1. Clone the repository and navigate into the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server (runs on port `6001`):
   ```bash
   npm run server
   ```
4. In a separate terminal, start the frontend dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

> Verify the backend is running by visiting [http://localhost:6001/plants](http://localhost:6001/plants).

## Usage

| Action | How |
|---|---|
| View all plants | Plants load automatically on startup |
| Add a plant | Fill in the form at the top and click "Add Plant" |
| Mark as sold out | Click the "In Stock" button on any plant card |
| Search plants | Type in the search bar to filter by name |

## API Endpoints

Base URL: `http://localhost:6001`

### `GET /plants`
Returns all plants.

```json
[
  { "id": 1, "name": "Aloe", "image": "./images/aloe.jpg", "price": 15.99 }
]
```

### `POST /plants`
Creates a new plant. Requires `Content-Type: application/json`.

Request body:
```json
{ "name": "string", "image": "string", "price": "string" }
```

## Tech Stack

- [React 18](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool and dev server
- [json-server](https://github.com/typicode/json-server) — mock REST API backend
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) — test suite
