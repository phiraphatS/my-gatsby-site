module.exports = {
    siteMetadata: {
      title: `PhotoBlock`,
      siteUrl: `https://www.yourdomain.tld`,
      description: `web block develope test`,
    },
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", `gatsby-plugin-smoothscroll`, `gatsby-transformer-remark`, {
        resolve: 'gatsby-plugin-manifest',
        options: {
          "icon": "src/images/icon.png"
        }
      }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
      // {
      //   resolve: 'gatsby-source-filesystem',
      //   options: {
      //     "name": "images",
      //     "path": "./src/images/"
      //   },
      //   __key: "images"
      // }, 
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          "name": `post`,
          "path": `${__dirname}/content/post`,
        },
        __key: "postimg"
      }, {
        resolve: `gatsby-omni-font-loader`,
        options: {
          enableListener: true,
          preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
          web: [
            {
              name: `Open Sans`,
              file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
            },
            {
              name: `Kanit`,
              file: `https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap`,
            },
            {
              name: `Trirong`,
              file: `https://fonts.googleapis.com/css2?family=Kanit:wght@300&family=Trirong:wght@200&display=swap`,
            },
          ],
        },
      },]
  };