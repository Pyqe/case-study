RESTful API (CRUD) to manage user data using Node.js.

### How to Install

1. Clone the repository.
   ```
   git clone https://github.com/Pyqe/case-study.git
   ```
2. Install dependencies.
   ```
   npm install
   ```
3. Run the server.
   ```
   npm run start
   ```
4. The server runs on port 9000.

### Endpoints

- `POST /users`: Create user.
- `GET /users`: Read all users.
- `GET /users/id`: Read user by ID.
- `PUT /users/id`: Update user by ID.
- `DELETE /users/id`: Delete user by ID.

### User Data

- `id` (string): Unique ID for each user.
- `name` (string): User's name.
- `email` (string): User's email.
- `birthDate` (string): User's date of  birth.

### Project Structure

```
case-study/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── server.js
│   └── utils.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```