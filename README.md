# Mini-Project-3

# Job Recruitment Platform

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file and add your MongoDB URI and JWT secret
4. Run the server: `node server.js`

## Endpoints

- POST `/api/auth/register`: Register a new user
- POST `/api/auth/login`: Login to get JWT
- POST `/api/jobs/create`: Post a new job (Protected)
- GET `/api/jobs/search`: Search for jobs
- POST `/api/applications/apply`: Apply for a job (Protected)
