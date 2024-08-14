const userController = require('../controllers/userController');
const { sendResponse } = require('../utils');


const userRoutes = (request, response) => {
    const { method, url } = request;

    if (url === '/users') {
        if (method === 'POST') {
            return userController.createUser(request, response);
        } else if (method === 'GET') {
            return userController.readAllUsers(request, response);
        }
    } else if (url.startsWith('/users/')) {
        const id = url.split('/').pop();

        if (method === 'GET') {
            return userController.readUserById(request, response, id);
        } else if (method === 'PUT') {
            return userController.updateUserById(request, response, id);
        } else if (method === 'DELETE') {
            return userController.deleteUserById(request, response, id);
        }
    }
    
    return sendResponse(response, 404, {
        "status": "fail",
        "message": "Route not found."
    });
};

module.exports = userRoutes;
