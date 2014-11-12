Time.zone = "America/New_York"
activate :blog do |blog|
  blog.layout = "post"
  blog.paginate = true
  blog.permalink = "blog/:year/:month/:title"
  blog.sources = "posts/:year-:month-:day-:title"
  blog.taglink = "tags/:tag.html"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
end

# Per-page layout changes:
#
# With no layout
page "/feed.xml", layout: false
page "/sitemap.xml", layout: false

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

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

  activate :asset_hash, ignore: 'avatar.*'

  # Use relative URLs
  # activate :relative_assets
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
