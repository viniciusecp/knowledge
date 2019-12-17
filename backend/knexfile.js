module.exports = {
  client: "postgresql",
  connection: {
    host: "localhost",
    port: 5431,
    database: "knowledge",
    user: "postgres",
    password: "docker"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
