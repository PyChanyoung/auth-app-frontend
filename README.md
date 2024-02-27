## Table of Contents

0. [Workflows](#workflows)

1. [Project Goals](#project-goals)

   - [Goals](#goals)

2. [Features](#features)

   - [Existing Features](#existing-features)
     - [Log In Page](#log-in-page)
     - [Sign Up Page](#sign-up-page)
     - [Dashboard](#dashboard)

3. [Information Architecture](#information-architecture)

   - [Database choice](#database-choice)
   - [Data Models](#data-models)
     - [User](#user)

4. [Technologies Used](#technologies-used)

   - [Tools](#tools)
   - [Database](#database)
   - [Frameworks](#frameworks)
   - [Languages](#languages)

5. [Deployment](#deployment)
   - [How to run this project locally](#how-to-run-this-project-locally)

# Workflows

![Workflows](./assets/workflows.png)

# Project Goals

## Goals

- To implement a full-stack web application that allows users to sign up and log in to a dashboard where they can view their personal information.
- Dashboard will be secured, not enter without logging in.

# Features

## Existing Features

### Log In Page

- Users can log in to their dashboard by entering their username and password.
- If the user does not have an account, they can click the "Sign Up" button to create an account.
- Validation for the userdata is handled by the backend and relevant feedback is sent to the user.

### Sign Up Page

- Users can sign up for an account by entering their username, email, and password.
- If the user already has an account, they can click the "Log In" button to log in.
- User data is handled by the backend and created in the database.

### Dashboard

- Users can view their personal information after logging in.
- The dashboard is secured and cannot be accessed without logging in.

# Information Architecture

## Database choice

- MongoDB was chosen as the database for this project.
- MongoDB was selected due to its flexibility in schema evolution and ease of mapping data to code, which is considered important for accommodating future changes in data schema.

## Data Models

### User

- The User model stores the user's username, email, and password.
  | Key in db | Field Type |
  | --- | --- |
  | \_id | ObjectId |
  | username | String |
  | email | String |
  | password | String |

# Technologies Used

## Tools

- [Visual Studio Code](https://code.visualstudio.com/) is the IDE used for developing this project.
- [GitHub](https://github.com/) to store and share all project code remotely.

## Database

- [MongoDB](https://www.mongodb.com/) is the database used for this project.

## Frameworks

- [Next.js](https://nextjs.org/) is the framework used for this project.
- [NestJS](https://nestjs.com/) is the framework used for this project.

## Languages

- [TypeScript](https://www.typescriptlang.org/) is the language used for this project.

## Libraries

- [bcryptjs](https://www.npmjs.com/package/bcryptjs) is used to hash the user's password before storing it in the database.
- [JWT](https://www.npmjs.com/package/jsonwebtoken) is used to create and verify JSON Web Tokens for user authentication.
- [NextAuth](https://next-auth.js.org/) is used to handle user authentication.

# Deployment

## How to run this project locally

1. Clone the repository:
   ```bash
   git clone https://github.com/PyChanyoung/auth-app-backend.git
   git clone https://github.com/PyChanyoung/auth-app-frontend.git
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the each project and add the following environment variables:
   ```bash
   # auth-app-backend/.env
   DATABASE_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret # Create and paste own secret key with command `openssl rand -base64 64` in terminal
   JWT_REFRESH=your_jwt_refresh # Create and paste own secret key with command `openssl rand -base64 64` in terminal
   ```
   ```bash
   # auth-app-frontend/.env
   NEXTAUTH_SECRET=your_nextauth_secret # Create and paste own secret key with command `openssl rand -base64 64` in terminal
   NEXTAUTH_URL=http://localhost:3000
   ```
4. Run the development server:
   ```bash
   # auth-app-backend
   npm run start:dev
   ```
   ```bash
   # auth-app-frontend
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
