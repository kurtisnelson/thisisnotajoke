Time.zone = "America/New_York"
activate :blog do |blog|
  blog.layout = "blog_layout"
  blog.paginate = true
  blog.permalink = "blog/:year/:month/:title"
  blog.sources = "posts/:year-:month-:day-:title"
  blog.taglink = "tags/:tag.html"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
end
###
# Compass
###

require 'bootstrap-sass'

# Change Compass configuration

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page "/feed.xml", layout: false
page "/sitemap.xml", layout: false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

set :markdown_engine, :redcarpet

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

# Activate sync extension
activate :sync do |sync|
  sync.fog_provider = 'AWS' # Your storage provider
  sync.fog_directory = 'thisisnotajoke.com' # Your bucket name
  sync.fog_region = 'us-east-1' # The region your storage bucket is in (eg us-east-1, us-west-1, eu-west-1, ap-southeast-1 )
  sync.aws_secret_access_key = ENV['AWS_SECRET']
  sync.aws_access_key_id = ENV['AWS_ID']
  sync.existing_remote_files = 'delete' # What to do with your existing remote files? ( keep or delete )
  sync.gzip_compression = true # Automatically replace files with their equivalent gzip compressed version
  sync.after_build = false # Disable sync to run after Middleman build ( defaults to true )
end

helpers do
  def nav_link_to(link, url, opts={})
    if "/" + request.path == url
      prefix = '<li class="active">' 
    else
      prefix = '<li>'
    end
    prefix + link_to(link, url, opts) + "</li>"
  end
end
