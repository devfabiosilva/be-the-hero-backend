
exports.up = function(knex) {
    //Metodo up é responsavel pela criação da tabela
  return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //o Nome 2 quer dizer 2 caracteres RJ, SP, MG,... etc

  });
};

exports.down = function(knex) {
    // Se der algo errado. O método down é utilizado. Exemplo. Apagar a tabela ong
    return knex.echema.dropTable('ongs');
  
};
