namespace :server do
  desc 'Work on the site with livereload'
  task development: ['utilities:build:purge:middleman_files'] do
    puts('Cranking up the development server running on port 4567')
    puts('Open your browser to http://localhost:4567/')
    system('bundle exec middleman server --verbose')
  end

  desc 'Build the site'
  task build: ['utilities:build:purge:middleman_files'] do
    puts('Building static files, but I will not be starting the server')
    system('time bundle exec middleman build --verbose')
  end
end
