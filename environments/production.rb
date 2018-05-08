# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'npm run build',
         source: 'build'

activate :asset_hash

rev_manifest = REV_MANIFEST if defined?(REV_MANIFEST)
rev_manifest&.each do |key, _value|
  ignore key
end

activate :minify_html do |html|
  html.remove_quotes = false
  html.remove_intertag_spaces = true
  html.remove_http_protocol = true
end
