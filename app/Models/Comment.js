'use strict'

const Model = use('Model')

class Comment extends Model {

    /**
   * Relationship on posts
   * 
   * @method posts
   *
   * @return {Object}
   */
  posts () {
    return this.hasMany('App/Models/Post')
  }

    /**
   * Relationship on user
   * 
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.hasOne('App/Models/User')
  }
}

module.exports = Comment
