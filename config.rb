require 'lib/helpers/webpack_asset_helper'
require 'slim'

activate :directory_indexes

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

helpers WebpackAssetHelper

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false


# activate :relative_assets
#
# configure :development do
#   set :css_dir, 'assets/stylesheets'
#   set :js_dir, 'assets/javascripts'
#   set :images_dir, 'assets/images'
#   set :fonts_dir, 'assets/fonts'
#
#   activate :livereload,
#            host: '127.0.0.1',
#            apply_js_live: false,
#            apply_css_live: false
# end
#
# configure :build do
#   activate :minify_css
#   activate :minify_javascript
#   activate :minify_html
#   activate :gzip
#   activate :asset_hash
# end
#
# activate :deploy do |deploy|
#   deploy.build_before   = true
#   deploy.deploy_method  = :git
#   deploy.branch         = 'gh-pages'
# end
