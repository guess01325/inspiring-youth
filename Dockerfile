
# Use a Ruby base image that includes the required Ruby version
FROM ruby:2.7.4

# Install system dependencies
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs \
  postgresql-client \
  yarn

# Set the working directory in the container
WORKDIR /

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install gem dependencies using Bundler
RUN gem install bundler && bundle install

# Copy the rest of the Rails application code into the container
COPY . .

# Precompile assets (if applicable, for production environments)
RUN RAILS_ENV=production bundle exec rails assets:precompile


# Expose the port that your Rails app runs on (e.g., 3000)
EXPOSE 3000

# Start the Rails server using the default Rails command
CMD ["rails", "server", "-b", "3.0.0.0"]