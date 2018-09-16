'use strict'

const Post = use('App/Models/Post')

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index () {
    const posts = Post.all();

    return posts;
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'title',
      'text'
    ])
  
    const post = await Post.create({ ...data, user_id: id })
  
    return post
  }

  /**
   * Display a single post.
   * GET posts/:id
   */
  async show ({ params }) {
    const posts = await Post.findOrFail(params.id);

    await posts.load('image')
    await posts.load('comments')

    return posts;
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request, response }) {
    const post = await Post.findOrFail(params.id)
  
    const data = request.only([
      'title',
      'text'
    ])
  
    post.merge(data)
  
    await post.save()
  
    return post
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy ({ params, request, response }) {
    const post = await Post.findOrFail(params.id);

    if(post.user_id !== request.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }

    await post.delete();
  }
}

module.exports = PostController
