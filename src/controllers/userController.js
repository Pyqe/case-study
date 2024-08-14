const User = require('../models/user');
const { sendResponse } = require('../utils');

let users = [];

const createUser = (request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    });

    request.on('end', () => {
        try {
            body = Buffer.concat(body).toString();
            const {
                name,
                email,
                birthDate,
            } = JSON.parse(body);

            if (!name || !email || !birthDate) {
                return sendResponse(response, 400, {
                    "status": "fail",
                    "message": "Failed to create user, make sure to fill out each field."
                });
            }

            const newUser = new User(
                name,
                email,
                birthDate,
            );
            users.push(newUser);

            return sendResponse(response, 201, {
                "status": "success",
                "message": "User successfully created.",
                "data": {
                    "userId": newUser.id
                }
            });
        } catch (error) {
            return sendResponse(response, 400, {
                "status": "fail",
                "message": "An error occured."
            });
        }
    });
};

const readAllUsers = (request, response) => {
    return sendResponse(response, 200, {
        "status": "success",
        "data": {
            "users": users
        }
    });
};

const readUserById = (request, response, id) => {
    const user = users.find(user => user.id === id);

    if (user) {
        return sendResponse(response, 200, {
            "status": "success",
            "data": {
                "user": user
            }
        });
    } else {
        return sendResponse(response, 404, {
            "status": "fail",
            "message": "User not found."
        });
    }
};

const updateUserById = (request, response, id) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    });

    request.on('end', () => {
        try {
            body = Buffer.concat(body).toString();
            const {
                name,
                email,
                birthDate,
            } = JSON.parse(body);

            if (!name || !email || !birthDate) {
                return sendResponse(response, 400, {
                    "status": "fail",
                    "message": "Failed to update user, make sure to fill out each field."
                });
            }

            const idx = users.findIndex(user => user.id === id);

            if (idx !== -1) {
                users[idx].name = name;
                users[idx].email = email;
                users[idx].birthDate = birthDate;

                return sendResponse(response, 200, {
                    "status": "success",
                    "message": "User successfully updated."
                });
            } else {
                return sendResponse(response, 404, {
                    "status": "fail",
                    "message": "Failed to update user. ID not found."
                });
            }
        } catch (error) {
            return sendResponse(response, 400, {
                "status": "fail",
                "message": "An error occured."
            });
        }
    });
};

const deleteUserById = (request, response, id) => {
    const idx = users.findIndex(user => user.id === id);

    if (idx !== -1) {
        users.splice(idx, 1);

        return sendResponse(response, 200, {
            "status": "success",
            "message": "User successfully deleted."
        });
    } else {
        return sendResponse(response, 404, {
            "status": "fail",
            "message": "Failed to delete user. ID not found."
        });
    }
};

module.exports = {
    createUser,
    readAllUsers,
    readUserById,
    updateUserById,
    deleteUserById
};
