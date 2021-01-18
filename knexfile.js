
module.exports = {

  production: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'User',
      user: 'postgres',
      password: 'laurindo70'
    },
    migrations: {
      directory:'./src/database/migrations'
    }
  }

};
