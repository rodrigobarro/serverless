// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const config = require(`${__dirname}/config/index`);

module.exports = {
  development: config.database
};
