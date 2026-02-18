# IT342 Lab 1 - User Registration & Authentication

## Project Overview
A full-stack authentication system with Spring Boot backend, React web frontend, and Android Kotlin mobile app.

## Technologies Used
- **Backend**: Spring Boot, Spring Security, JWT, JPA, MySQL
- **Web**: React, Styled-components, Axios, React Router
- **Mobile**: Kotlin

## Features
- User registration with validation
- Secure login with JWT
- Protected user dashboard/profile
- Logout functionality
- Cross-platform compatibility (Web + Mobile)
- Password encryption (BCrypt)


## Project Structure
IT342_G1_Villarta_Lab1/
├── backend/ # Spring Boot application
├── web/ # React application
├── mobile/ # Android Kotlin application
├── docs/ # Documentation and screenshots
├── README.md # This file
└── TASK_CHECKLIST.md # Task tracking with commit hashes


## Setup Instructions

### Backend Setup
1. Navigate to backend directory: `cd backend`
2. Configure MySQL database in `application.properties`
3. Run: `./mvnw spring-boot:run`
4. Backend runs on: `http://localhost:8080`

### Web Frontend Setup
1. Navigate to web directory: `cd web`
2. Install dependencies: `npm install`
3. Run: `npm start`
4. Web app runs on: `http://localhost:3000`

### Mobile App Setup
1. Open mobile directory in Android Studio
2. Update API URL in `ApiClient.kt` (use 10.0.2.2 for emulator)
3. Build and run on emulator or physical device

## API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/user/me` - Get current user

## Screenshots
Screenshots of both web and mobile applications are available in the `/docs` directory.

## Contributors
- [Your Name] - IT342

## License
This project is for educational purposes.