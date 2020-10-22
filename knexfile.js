// Update with your config settings.
const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/family-recipes";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/family-recipes.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: { directory: './data/migrations'},
    seeds: {  directory: './data/seeds'},
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations",
    },
    seeds: { directory: "./data/pg/seeds" },
  },
};
