// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/hangtime'
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
    client: 'pg',
    connection: 'postgres://lytiwjlmrmylvb:e08cca19d19fb62d511e645fba271b4b238e67f868b3d7e98351d2b86d4464c1@ec2-184-73-174-171.compute-1.amazonaws.com:5432/dbk5p0jui2q7po'
    
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
