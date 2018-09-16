'use strict'

const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table
          .integer("post_id")
          .unsigned()
          .references('id')
          .inTable('posts')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table
          .integer("user_id")
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
      table.string("text")
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
