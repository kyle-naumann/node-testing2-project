
exports.up = function(knex) {
  return knex.schema.createTable("LOTR", table =>{
      table.increments("CharacterId")
      table.string("CharacterName").notNullable().unique()
  })
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists("LOTR")
};
