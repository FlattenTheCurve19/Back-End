const knex = require("knex");
const knexPostgis = require("knex-postgis");

const db = knex({
  client: "postgres",
});
const st = knexPostgis(db);

module.exports = st;