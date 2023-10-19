const api = require('lambda-api')();
const knex = require(`${__dirname}/knex/knex.js`);

api.get('/employee', async (req, res) => {
    try {
        const pageNumber = 1;
        const pageSize = 100;

        const employees = await knex('employee')
            .limit(pageSize)
            .offset((pageNumber - 1) * pageSize)

        return { employees };
    } catch (error) {
        return { error: 'Unable to process request' }
    }
});


api.get('/employee/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const employees = await knex('employee')
            .where({ id })

        return { employees };
    } catch (error) {
        return { error: 'Unable to process request' }
    }
});

api.delete('/employee/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await knex('employee')
            .where({ id })
            .del();

        return { message: 'employee successfully registered' };
    } catch (error) {
        return { error: 'Unable to process request' }
    }
});

api.patch('/employee/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const result = await knex('employee').where({ id })
            .update(data)
        return result;
    } catch (error) {
        return { error: 'Unable to process request' }
    }
});

api.post('/employee', async (req, res) => {
    const data = req.body;
    try {
        await knex('employee').insert(data);
        return { message: 'employee successfully registered' };
    } catch (error) {
        return { error: 'Unable to process request' }
    }
});


exports.handler = async (event, context) => {
    return await api.run(event, context);
};
