module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"G-19L429380W","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"53aa06cf17e4239d0dba6ffd09854e02"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"defaultLayouts":{"default":"/Users/knelson/workspace/thisisnotajoke/src/components/layout.jsx"},"gatsbyRemarkPlugins":[{"resolve":"/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-remark-images","id":"32658888-e97e-563f-9132-b45b813fd0fb","name":"gatsby-remark-images","version":"6.24.0","modulePath":"/Users/knelson/workspace/thisisnotajoke/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":1200},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/knelson/workspace/thisisnotajoke/node_modules/remark-mdx-frontmatter","id":"eada8a48-4767-59b5-99c0-3858aa8703fd","name":"remark-mdx-frontmatter","version":"1.1.1","modulePath":"/Users/knelson/workspace/thisisnotajoke/node_modules/remark-mdx-frontmatter/dist/index.js","module":{},"pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx"],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/knelson/workspace/thisisnotajoke","commonmark":false,"JSFrontmatterEngine":false,"engines":{}},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1200},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
