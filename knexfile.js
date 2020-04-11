// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    searchPath: 'database_schema',
    connection: {
      database: 'flatten_the_curve',
      user: process.env.PG_USER || 'lambda',
      password: process.env.PG_PASS || 'password',
      host: '127.0.0.1'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
