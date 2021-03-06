/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// module.exports = {
//   /* Your site config here */
//   plugins: [],
// }
// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Blog Tutorial Demo`,
//   },
//   plugins: [
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `src`,
//         path: `${__dirname}/src/`,
//       },
//     },
//     `gatsby-transformer-remark`,
//   ],
// }

module.exports = {
  pathPrefix: "/gatsby-blog",
  siteMetadata: {
    title: `Gatsby Blog Tutorial Demo`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}