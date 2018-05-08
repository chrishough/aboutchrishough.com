# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'npm run build_external',
         source: 'build'

activate :asset_hash, exts: %w[.jpg .png]

activate :minify_html do |html|
  html.remove_quotes = false
  html.remove_intertag_spaces = true
  html.remove_http_protocol = false
end

set :protocol, 'http://'
set :host, 'aboutchrishough.com'
set :port, 80

after_build do
  Dir.glob('build/assets/*').select { |file| /manifest/.match file }.each { |file| File.delete(file) }
end
