'use strict'

const Model = use('Model')

class Post extends Model {

    /**
   * Relationship on images
   * 
   * @method image
   *
   * @return {Object}
   */
  image () {
    return this.hasOne('App/Models/Image')
  }
}

module.exports = Post
