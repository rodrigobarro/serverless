const api = require('lambda-api')();
const knex = require(`${__dirname}/knex/knex.js`);

api.get('/employee', async (req, res) => {
    try {
        const pageNumber = 1; 
        const pageSize = 10; 

        const employees = await knex('information_schema.tables')
            .where('table_schema', 'public') 
            .limit(pageSize)
            .offset((pageNumber - 1) * pageSize)
            .select('employee');

        return { employees };
    } catch (error) {
        console.error('Error listing tables:', error);
    } finally {
        knex.destroy();
    }
});

exports.handler = async (event, context) => {
    return await api.run(event, context);
};
