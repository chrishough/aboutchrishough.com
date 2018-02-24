Bundler.require(:default, :development)

activate :external_pipeline,
  name: :webpack,
  command: 'npm run start',
  source: 'build'

configure :development do
  activate :livereload, no_swf: true
end
