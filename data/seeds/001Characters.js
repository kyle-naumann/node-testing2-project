
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('LOTR').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('LOTR').insert([
        {CharacterId: 1, CharacterName: 'Aaragorn'},
        {CharacterId: 2, CharacterName: 'Gimli'},
        {CharacterId: 3, CharacterName: 'Legolas'}
      ]);
    });
};
