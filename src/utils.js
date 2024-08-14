const sendResponse = (response, statusCode, data) => {
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.statusCode = statusCode;
    response.end(JSON.stringify(data));
};

module.exports = {
    sendResponse
};
