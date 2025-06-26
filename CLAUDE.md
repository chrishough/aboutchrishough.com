# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal branding website built with Middleman 4.5+, a Ruby-based static site generator. The site uses Webpack for asset bundling, Slim for templating, and SCSS for styling.

## Common Development Commands

### Development Server
```bash
# Start the development server with livereload
rake server:development

# Alternative with verbose logging
rake server:development --verbose
```

### Building the Site
```bash
# Build for production (optimized)
rake server:build:production

# Build for staging (local testing)
rake server:build:staging

# Clean build directories
rake utilities:build:purge:all
```

### Testing & Linting
```bash
# Run all linters (JavaScript, CSS, Ruby)
rake test:lint:all

# Individual linters
rake test:lint:js      # Lint JavaScript with ESLint
rake test:lint:css     # Lint CSS/SCSS with StyleLint
rake test:lint:ruby    # Lint Ruby with RuboCop

# Fix linting issues automatically
yarn lint:js_with_fix
yarn lint:css_with_fix
rubocop -a
```

### Webpack Asset Building
```bash
# Build assets for different environments
yarn develop     # Development build with source maps
yarn staging     # Staging build
yarn production  # Production build (minified)

# Webpack rake tasks
rake webpack:build:development
rake webpack:build:staging
rake webpack:build:production
```

### Deployment
```bash
# Deploy to GitHub Pages (builds before deploying)
rake deploy:github
```

## Architecture & Code Organization

### Technology Stack
- **Ruby 3.4.3** - Core language
- **Middleman 4.5+** - Static site generator framework
- **Webpack 5** - Asset bundling and compilation
- **Slim** - Templating engine (v4.0, not v5 due to Middleman compatibility)
- **SCSS** - Styling with Bootstrap 5.3.3
- **Font Awesome 6.7.2** - Icon library
- **jQuery 3.7.1** - DOM manipulation (legacy support)

### Directory Structure

#### `/source/` - Main application source
- **`assets/`** - Static assets managed by Webpack
  - `javascripts/` - JS organized by components and pages
  - `stylesheets/` - SCSS with component-based organization
  - `images/` - Image assets including backgrounds, logos, favicons
- **`layouts/`** - Slim layout templates (error, index, page)
- **`partials/`** - Reusable Slim components
- **`*.html.slim`** - Individual page templates

#### `/data/` - YAML data files
- `components/` - Component-specific data (analytics, bio, social)
- `page/` - Page-specific content data
- `settings.yml` - Global site settings

#### `/lib/` - Ruby libraries and extensions
- `webpack/` - Webpack integration helpers
- `tasks/` - Rake task definitions
- `core_extensions/` - Ruby core class extensions

#### `/build/` - Generated static site output (git-ignored)

### Key Architectural Patterns

1. **Webpack Asset Pipeline**: All JavaScript and CSS assets are processed through Webpack, generating hashed filenames for cache-busting. The `WebpackAssets` module provides helpers to reference these assets in templates.

2. **Data-Driven Content**: Page content is stored in YAML files under `/data/`, keeping content separate from presentation logic.

3. **Component Organization**: Both JavaScript and SCSS follow a component-based structure, with dedicated files for each UI component and page.

4. **Environment Configuration**: Separate environment files (`development.rb`, `production.rb`, `staging.rb`) control build behavior.

5. **Helper Methods**: Custom helpers in `config.rb` handle external site URLs and asset paths, supporting both local development and production deployment.

### Font Awesome Integration

Font Awesome is loaded via npm packages and imported in JavaScript files. Icons are created using the SVG Core library approach rather than webfonts for better performance.

### Build Process

1. **Webpack** processes all JavaScript and SCSS files, generating manifests (`site-manifest.json`) that map original filenames to hashed versions
2. **Middleman** uses these manifests via the `webpack_asset_path` helper to reference the correct asset URLs
3. **Deploy** task builds the site and pushes to the `gh-pages` branch

## Important Notes

- Always use `rake tasks` to see all available tasks
- The site uses directory indexes (pretty URLs)
- Temporary files should be stored in `./tmp` directory
- Follow the existing code style - check `.rubocop.yml` for Ruby style guidelines
- Slim templates use v4.0 syntax (not v5) due to Middleman compatibility constraints