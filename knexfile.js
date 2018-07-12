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
    connection: 'postgres://jckvtjrtkehpsa:73091ec28336dcd0f3d95d644fb805ff2a36ce279a5686b84ee2bd0979124052@ec2-54-227-240-7.compute-1.amazonaws.com:5432/devpo6pt4gk3b7'
    
    
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
