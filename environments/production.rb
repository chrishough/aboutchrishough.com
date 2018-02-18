activate :external_pipeline,
  name: :webpack,
  command: "npm run build",
  source: "build"

rev_manifest = REV_MANIFEST if defined?(REV_MANIFEST)
if rev_manifest
  rev_manifest.each do |key, value|
    ignore key
  end
end

ignore 'stylesheets/**'
ignore 'javascripts/**'
ignore 'rev-manifest.json'
