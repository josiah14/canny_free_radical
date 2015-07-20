class BlogController < ApplicationController
  def index
    @last_post = Post.order(:created_at).last
    @posts = Post.order(:created_at).map { |post| { title: post.title, date: post.created_at } }
  end
end
