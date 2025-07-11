# frozen_string_literal: true

Bundler.require(:default)

require 'pry'
require 'slim'

Slim::Engine.disable_option_validator!

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true
set :images_dir, 'assets/images'

require_relative 'lib/webpack/webpack_assets'

autoload :WebpackAssets, 'lib/webpack/webpack_assets'

helpers WebpackAssets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page '/sitemap.xml', layout: false

ignore 'assets/stylesheets/*'
ignore 'assets/javascripts/*'
ignore 'partials/*'
ignore 'rev-manifest.json'

activate :directory_indexes

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
  deploy.branch = 'gh-pages'
end

# rubocop:disable Metrics/BlockLength
helpers do
  def image_url(source)
    return image_path(source) unless external_site_configured?

    config[:protocol] + host_with_port + image_path(source)
  end

  def link_to(*args, &)
    return super unless external_site_configured?
    return super if args.select { |arg| arg.is_a?(Hash) && arg.include?(:target) }.present?

    if block_given?
      args[0] = external_destination(args[0])
    else
      args[1] = external_destination(args[1])
    end

    super
  end

  def stylesheet_link_tag(destination)
    return super unless external_site_configured?

    super(external_destination(prep_external_destination(destination)))
  end

  def javascript_include_tag(destination)
    return super unless external_site_configured?

    super(external_destination(prep_external_destination(destination)))
  end

  private

  def external_destination(destination)
    config[:protocol] + host_with_port + destination
  end

  def prep_external_destination(destination)
    "/#{destination}"
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
