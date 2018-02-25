activate :external_pipeline,
  name: :webpack,
  command: 'npm run build',
  source: 'build'

rev_manifest = REV_MANIFEST if defined?(REV_MANIFEST)
if rev_manifest
  rev_manifest.each do |key, value|
    ignore key
  end
end

ignore 'assets/**/*'
ignore 'partials/*'
ignore 'rev-manifest.json'

activate :minify_html do |html|
  html.remove_quotes = false
  html.remove_intertag_spaces = true
  html.remove_http_protocol = true
end

after_build do
  FileUtils.cp('source/CNAME', 'build/CNAME')
end
