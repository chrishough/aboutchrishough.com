Bundler.require(:development)

activate :external_pipeline,
          name: :webpack,
          command: 'npm run start',
          source: 'build'

activate :livereload,
          host: '127.0.0.1',
          apply_js_live: false,
          apply_css_live: false,
          no_swf: true
