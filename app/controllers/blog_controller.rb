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

  def show
    post = Post.find(params[:id])
    render json: { image: ActionController::Base.helpers.asset_path(post.cover_image), content: post.content }
  end
end
