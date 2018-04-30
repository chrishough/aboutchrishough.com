# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'npm run build_local',
         source: 'build'

Slim::Engine.set_default_options(pretty: true)

set :relative_links, true

activate :relative_assets
