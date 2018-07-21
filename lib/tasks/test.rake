# frozen_string_literal: true

namespace :test do
  namespace :lint do
    desc 'Lint JavaScript via esLint.'
    task :js do
      puts("---------------------------------------------------------->>\n")
      puts("Running esLint")
      puts("---------------------------------------------------------->>\n")
      system('npm run lintjs')
    end

    desc 'Lint SCSS via StyleLint.'
    task :css do
      puts("---------------------------------------------------------->>\n")
      puts("Running Style Lint")
      puts("---------------------------------------------------------->>\n")
      system('npm run lintcss')
    end
  end
end
