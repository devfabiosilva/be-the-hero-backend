
exports.up = function(knex) {
      //Metodo up é responsavel pela criação da tabela
    return knex.schema.createTable('incidents', function(table) {
        table.increments();


        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //relacionamento
        table.string('ong_id').notNullable();
  
        //chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.dropTable('incidents');
};
