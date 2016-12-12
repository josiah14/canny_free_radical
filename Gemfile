source 'https://rubygems.org'

ruby '2.3.1'

gem 'rails', '4.2.0'
gem 'bower-rails', '~> 0.9.2'
gem 'sass-rails', '~> 5.0'
# Compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# JSON API builder gem
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# Authentication manager
gem 'devise', '~> 3.4.1'
# Image Upload
gem 'carrierwave', '0.10.0'
gem 'cloudinary', '1.2.4'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

group :production do
  gem 'thin'
  # Use Postgres as the production database.
  gem 'pg'
end

group :development, :test do
  # Use SqlLite as the development and test database
  gem 'sqlite3'
  # Ruby linter
  gem 'rubocop', require: false

  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'pry'
  gem 'pry-rails'
  gem 'pry-byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background.
  # Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do
  # testing framework
  gem 'rspec-rails', '~> 3.0'
  gem 'cucumber-rails', '~> 1.4.2', require: false
  gem 'database_cleaner', '~> 1.4.0'
  gem 'capybara', '~> 2.4.4'
end
