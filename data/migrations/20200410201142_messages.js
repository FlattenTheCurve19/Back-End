
exports.up = function(knex) {
  return knex.schema.createTable("messages", table => {
      table.increments("id").primary();
      table.string("avatar", 255);
      table.specificType("coordinates", "geometry(point, 4326)").notNullable();
      table.json("geoLock").notNullable();
      table.string("userUUID", 255).notNullable();
      table.text("postField").notNullable();
      table.datetime("timeOfPost").notNullable();
      table.text("image");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("messages");
};
