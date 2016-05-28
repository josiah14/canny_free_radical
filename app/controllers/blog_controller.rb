class BlogController < ApplicationController
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

  # just a test comment
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
