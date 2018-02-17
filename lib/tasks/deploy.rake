namespace :deploy do
  desc 'Push the built version to github pages'
  task github: ['utilities:build:purge:middleman_files', 'utilities:build:purge:osx_files'] do
    puts('Building the production static version of the application')
    system('time bundle exec middleman deploy --verbose')
  end
end
