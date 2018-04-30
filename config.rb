# frozen_string_literal: true

Bundler.require(:default)

require 'slim'
Slim::Engine.disable_option_validator!

require_all 'lib/helpers'
autoload_all 'lib/helpers'

activate :directory_indexes

set :images_dir, 'assets/images'

helpers WebpackAssetHelpers
helpers FolderHelpers

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

ignore 'assets/stylesheets/*'
ignore 'assets/javascripts/*'
ignore 'partials/*'
ignore 'content/*'
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

# rubocop:disable Metrics/BlockLength
helpers do
  def image_url(source)
    return image_path(source) unless external_site_configured?
    config[:protocol] + host_with_port + image_path(source)
  end

  def link_to(description, destination, **args)
    return super(description, destination, args) unless external_site_configured?
    super(description, external_destination(destination), args)
  end

  def stylesheet_link_tag(destination)
    return super(destination) unless external_site_configured?
    super(external_destination(prep_external_destination(destination)))
  end

  def javascript_include_tag(destination)
    return super(destination) unless external_site_configured?
    super(external_destination(prep_external_destination(destination)))
  end

  private

  def external_destination(destination)
    config[:protocol] + host_with_port + destination
  end

  def prep_external_destination(destination)
    '/' + destination
  end

  def external_site_configured?
    config[:host] && config[:port] && config[:protocol]
  end

  def host_with_port
    [config[:host], optional_port].compact.join(':')
  end

  def optional_port
    config[:port] unless config[:port].to_i == 80
  end
end
# rubocop:enable Metrics/BlockLength
