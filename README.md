# ' + $project.Name + @'

' + $project.Description + @'

## Tech Stack

- ' + $project.Stack + @'

## Features

' + $featureList + @'

## Getting Started

```bash
cd ' + $project.Name + @'
npm install
npm run dev
```

## Run the Application

Open the app in your browser:

- ' + $project.Url + @'

## Environment Variables

Create a `.env` file in the project root if needed:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your-secret-key
```

## Notes

- Keep secrets and credentials in `.env`.
- Use separate branches for features and fixes.
- This folder is an independent Git repository.
