namespace :utilities do
  namespace :build do
    namespace :purge do
      desc 'Remove temporary, build, and cache directories.'
      task :middleman_files do
        puts('---------------------------------------------------------->>')
        puts('Removing temporary, build, and cache directories')
        puts('---------------------------------------------------------->>')
        FileUtils.rm_rf ['build']
      end

      desc 'Remove OSX operating system files'
      task :osx_files do
        puts('---------------------------------------------------------->>')
        puts('Removing osx files')
        puts('---------------------------------------------------------->>')
        system('find source/ -name .DS_Store -delete')
      end

      desc 'Remove all build files'
      task :all do
        Rake::Task['utilities:build:purge:middleman_files'].invoke
        Rake::Task['utilities:build:purge:osx_files'].invoke
      end
    end
  end
end
