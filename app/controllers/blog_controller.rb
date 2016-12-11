class BlogController < ApplicationController
  # Displays either the post selection page or the active post content, depending
  # on which screen the user was last on.
  def index
    @last_post = Post.order(:created_at).last
    @posts = Post.order(:created_at).reverse.map do |post|
      {
        id: post.id,
        title: post.title,
        date: Date.parse(post.created_at.httpdate).strftime("%e-%b, '%y"),
        cover_image: post.cover_image
      }
    end
  end

  # display form to create a new blog post
  def new
    unless user_signed_in? && current_user && current_user.is_admin?
      render status: 403, html: 'You must be signed-in as an admin to add a post.'
    end
  end

  # Creates a new blog post
  def create
    unless user_signed_in? && current_user && current_user.is_admin?
      render status: 403, json: 'You must be signed-in as an admin to create a post.'
    end
    binding.pry
    content = params.require('blog').require('content')
    puts content
    binding.pry
    render text: blog_path, status: :created, location: blog_path
  end

  # Serve up the JSON for a particular blog post
  def show
    post = Post.find(params[:id])
    render json: {
      image: ActionController::Base.helpers.asset_path(post.cover_image),
      content: post.content,
      comments: Comment.order(created_at: :desc).where(post_id: post.id).as_json.map { |c|
        c.merge!(email: User.find(c['user_id']).email)
      }
    }
  end

  # Create a new comment on a post
  def create_comment
    unless user_signed_in?
      render status: 403, json: { message: 'Please sign in to add a comment.' }
    end

    comment_params = params.permit(:content, :id)
    new_comment = Comment.create!(
      content: comment_params.require(:content),
      post_id: comment_params.require(:id),
      user_id: current_user.id
    )
    render status: :created, json: new_comment
  end
end
