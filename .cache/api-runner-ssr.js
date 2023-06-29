var plugins = [{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-plugin-styled-components/gatsby-ssr.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      name: 'gatsby-plugin-gatsby-cloud',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-plugin-gatsby-cloud/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"G-19L429380W","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[],"output":"/sitemap","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"53aa06cf17e4239d0dba6ffd09854e02"},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-plugin-mdx/gatsby-ssr.js'),
      options: {"plugins":[],"defaultLayouts":{"default":"/Users/knelson/workspace/thisisnotajoke/src/components/layout.jsx"},"gatsbyRemarkPlugins":[{"resolve":"/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-remark-images","id":"32658888-e97e-563f-9132-b45b813fd0fb","name":"gatsby-remark-images","version":"6.24.0","modulePath":"/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":1200},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/knelson/workspace/thisisnotajoke/node_modules/remark-mdx-frontmatter","id":"eada8a48-4767-59b5-99c0-3858aa8703fd","name":"remark-mdx-frontmatter","version":"1.1.1","modulePath":"/Users/knelson/workspace/thisisnotajoke/node_modules/remark-mdx-frontmatter/dist/index.js","module":{},"pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx"],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/knelson/workspace/thisisnotajoke","commonmark":false,"JSFrontmatterEngine":false,"engines":{}},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-plugin-offline/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'partytown',
      plugin: require('/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
