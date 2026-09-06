exports.up = function (knex) {
  return knex.schema.alterTable('contacts', (table) => {
    table.string('tax_number').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('contacts', (table) => {
    table.dropColumn('tax_number');
  });
};
