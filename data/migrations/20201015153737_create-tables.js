
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id');
        tbl.string('name', 255).notNullable();
        tbl.string('email', 255).notNullable();
        tbl.string('password', 255).notNullable();
        tbl.string('role', 128).notNullable();
    })

    .createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.string('title', 128).notNullable();
        tbl.string('source', 255).notNullable();
        tbl.string('prep_time', 128).notNullable();
        tbl.string('cook_time', 128).notNullable();
        tbl.integer('servings').defaultTo(1);
        tbl.string('image', 8000);
        tbl.string('share_link', 128);
        tbl.integer('users_id')
            .unsigned()
            .notNullable()
            .references('users.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })

    .createTable('tags', tbl => {
        tbl.increments('id');
        tbl.string('tag_name', 128).notNullable();
    })

    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('ingredient_name', 128).notNullable();
    })

    .createTable('instructions', tbl => {
        tbl.increments('id');
        tbl.integer('step').notNullable();
        tbl.string('instruction_text', 255).notNullable();
        tbl.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })

    .createTable('recipes_tags', tbl => {
        tbl.increments('id');
        tbl.integer('tags_id')
            .unsigned()
            .notNullable()
            .references('tags.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');    
    })

    .createTable('recipe_ingredients', tbl => {
        tbl.increments('id');
        tbl.string('qty_amount', 32 ).notNullable();
        tbl.string('qty_type', 128).notNullable();
        tbl.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');    
    })

    .createTable('ratings', tbl => {
        tbl.increments('id');
        tbl.integer('value').defaultTo(1);
        tbl.string('comment', 128);
        tbl.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
         tbl.integer('users_id')
            .unsigned()
            .notNullable()
            .references('users.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');        
    })
  
};

exports.down = function(knex) {
  
};
