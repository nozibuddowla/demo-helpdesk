# PH — Assignment System

A simple React-based web application for managing and tracking assignment issues. It allows users to view, filter, and update issue statuses in a clean and responsive interface.

- [Live Link](https://demo-ph-helpdesk.netlify.app/)

## ⚙️ Setup & Run

1. Clone the repository
2. Ensure `data.json` exists in your `public/` directory
3. Install dependencies and start the app:

   ```bash
   npm install
   npm run dev   # For Vite
   # or
   npm start     # For CRA
   ```
4. Open [http://localhost:5173](http://localhost:5173) (or your local dev port)

## 📁 Example `data.json`

```json
[
  {
    "ticketId": "T001",
    "requestedBy": "John Doe",
    "userImg": "/images/john.jpg",
    "subject": "Assignment Extension Request",
    "description": "Need an extension for project submission.",
    "priority": "High",
    "status": "Pending"
  }
]
```
