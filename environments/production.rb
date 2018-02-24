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

after_build do
  FileUtils.cp('source/CNAME', 'build/CNAME')
end
