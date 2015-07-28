class BlogController < ApplicationController
  def index
    @last_post = Post.order(:created_at).last
    @posts = Post.order(:created_at).reverse.map do |post|
      {
        title: post.title,
        date: Date.parse(post.created_at.httpdate).strftime("%e-%b, '%y"),
        cover_image: post.cover_image
      }
    end
  end
end
