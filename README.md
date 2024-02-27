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
   - [Databases](#databases)
   - [Libraries](#libraries)
   - [Languages](#languages)

5. [Deployment](#deployment)
   - [How to run this project locally](#how-to-run-this-project-locally)

# Workflows

![Workflows](https://drive.google.com/file/d/143CoCzBIRvQCYXmmCpDQyux-Pn1kuPZP/view?usp=sharing)

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
-
