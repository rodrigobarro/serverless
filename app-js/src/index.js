const api = require('lambda-api')();

api.get('/employees', async (req, res) => {
    return { req, status: 'ok' };
});

api.get('/employees/:id', async (req, res) => {
    return { req, status: 'ok' };
});

api.post('/employees', async (req, res) => {
    return { req, status: 'ok' };
});

api.post('/employees', async (req, res) => {
    return { req, status: 'ok' };
});

exports.handler = async (event, context) => {
    return await api.run(event, context);
};
