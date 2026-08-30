# portfolio

A personal portfolio website for showcasing projects, experience, and contact details with a modern frontend and email-capable backend.

## Tech Stack

- React, Vite, Tailwind CSS, Express, Node.js

## Features

- Portfolio homepage
- Project showcase
- About and experience sections
- Contact form
- Backend email sending

## Getting Started

`ash
cd portfolio
npm install`n`n npm run dev
`

## Run the Application

After installation, open the app in the browser:

- Frontend: http://localhost:5173

## Project Structure

`	ext
portfolio/
├── README.md
├── package.json
├── .gitignore
├── src/ or client/
├── public/
├── server/ or routes/
├── model/ or models/
└── .env.example
`

## Environment Variables

Create a .env file in the project root if required and add your configuration values such as:

`env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your-secret-key
`

## Notes

- Keep your secrets and credentials in .env, never in source control.
- Use separate branches for new features and bug fixes.
- This folder is now an independent Git repository.
