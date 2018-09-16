'use strict'

const Comment = use('App/Models/Comment')
/**
 * Resourceful controller for interacting with comments
 */
class CommentController {
  /**
   * Show a list of all comments.
   * GET comments
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new comment.
   * POST comments
   */
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'title',
      'text',
      'post_id'
    ])
  
    const comment = await Comment.create({ ...data, user_id: id })
  
    return comment
  }

  /**
   * Display a single comment.
   * GET comments/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update comment details.
   * PUT or PATCH comments/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a comment with id.
   * DELETE comments/:id
   */
  async destroy ({ params, request, response }) {
    const comment = await Comment.findOrFail(params.id);

    if(comment.user_id !== request.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }

    await comment.delete();
  }
}

module.exports = CommentController
