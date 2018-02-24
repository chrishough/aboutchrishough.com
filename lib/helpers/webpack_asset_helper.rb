ASSET_FOLDER = 'assets'
DIST_PATH = File.join(Dir.pwd, 'build' + '/' + ASSET_FOLDER)
REV_MANIFEST_PATH = File.join(DIST_PATH, 'rev-manifest.json')

module WebpackAssetHelper
  def webpack_asset_path(path)
    rev_manifest = JSON.parse(File.read(REV_MANIFEST_PATH)) if File.exist?(REV_MANIFEST_PATH)
    raise "#{REV_MANIFEST_PATH} is missing." unless rev_manifest

    asset_path = rev_manifest[path]
    raise "Can't find #{path} in webpack assets. See rev-manifest.json for complete list." unless asset_path

    ASSET_FOLDER + '/' + asset_path
  end
end
