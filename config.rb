Bundler.require(:default)

require 'slim'
Slim::Engine.disable_option_validator!

require_all 'lib/helpers'
autoload_all 'lib/helpers'

activate :directory_indexes

# set :css_dir, 'assets/stylesheets'
# set :js_dir, 'assets/javascripts'
# set :images_dir, 'assets/images'
set :images_dir, 'assets/images/middleman'

helpers WebpackAssetHelper

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# ignore 'assets/**/*'
# ignore 'partials/*'
# ignore 'rev-manifest.json'
ignore 'assets/images/webpack/*'
ignore 'assets/stylesheets/*'
ignore 'assets/javascripts/*'
ignore 'partials/*'
ignore 'rev-manifest.json'


activate :blog do |blog|
  blog.sources = "articles/{year}-{month}-{day}-{title}.html"
  blog.permalink = "articles/{title}/index.html"
  blog.layout = 'article'
end

activate :deploy do |deploy|
  deploy.build_before   = true
  deploy.deploy_method  = :git
  deploy.branch         = 'TEST-BRANCH'
end
