# frozen_string_literal: true

namespace :test do
  namespace :lint do
    desc 'Lint JavaScript via esLint.'
    task :javascript do
      puts("---------------------------------------------------------->>\n")
      puts("\nRunning esLint")
      puts("\nIf this command fails, please install: npm install -g eslint")
      puts("---------------------------------------------------------->>\n")
      system('npm run lint')
    end

    desc 'Lint SCSS via StyleLint.'
    task :style do
      puts("---------------------------------------------------------->>\n")
      puts("\nRunning Style Lint")
      puts("\nIf this command fails, please install: npm install -g stylelint")
      puts("---------------------------------------------------------->>\n")
      system('stylelint "source/**/*.scss" --syntax scss --fix')
    end
  end
end
